import ject from 'ject'
import ace from 'brace'
import 'brace/mode/javascript'
import 'brace/mode/css'
import 'brace/theme/tomorrow'
import jss from './jss'
import layout from './layout.html'
import style from './style'
import defaultJSS from './default-jss'

function render() {
  const sheet = jss.createStyleSheet(style).attach()
  document.body.innerHTML = ject(layout, sheet.classes)

  const inputElem = document.getElementsByClassName(sheet.classes.input)[0]
  const input = ace.edit(inputElem)
  input.getSession().setMode('ace/mode/javascript')
  input.setTheme('ace/theme/tomorrow')
  input.$blockScrolling = Infinity

  const outputElem = document.getElementsByClassName(sheet.classes.output)[0]
  const output = ace.edit(outputElem)
  output.getSession().setMode('ace/mode/css')
  output.setTheme('ace/theme/tomorrow')
  output.setReadOnly(true)
  output.$blockScrolling = Infinity

  return {input, output, sheet}
}

function convert(str) {
  let userStyle
  try {
    userStyle = new Function(str)() // eslint-disable-line no-new-func
  }
  catch (err) {
    return err.message
  }
  return jss.createStyleSheet(userStyle).toString()
}

function load({input, output}) {
  const jssStr = localStorage.jss || defaultJSS
  if (jssStr) {
    renderInput(input, jssStr)
    renderOutput(output, jssStr)
  }
}

function save(str) {
  localStorage.jss = str
}

function listen({input, output}) {
  // React on text input.
  input.addEventListener('change', (e) => {
    const value = input.getValue()
    save(value)
    renderOutput(output, value)
  })
}

function renderInput(input, str) {
  input.setValue(str)
}

function renderOutput(output, str) {
  output.setValue(convert(str))
  output.clearSelection()
}

(() => {
  const state = render()
  load(state)
  listen(state)
})()
