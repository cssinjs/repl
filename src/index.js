import ject from 'ject'
import jss from './jss'
import layout from './layout.html'
import style from './style'
import defaultJSS from './default-jss'

function render() {
  const sheet = jss.createStyleSheet(style).attach()
  document.body.innerHTML = ject(layout, sheet.classes)
  const textarea = document.getElementsByClassName(sheet.classes.textarea)[0]
  const output = document.getElementsByClassName(sheet.classes.output)[0]
  textarea.focus()
  return {textarea, output, sheet}
}

function convert(str) {
  let userStyle
  try {
    userStyle = new Function(`${str}`)() // eslint-disable-line no-new-func
  }
  catch (err) {
    return err.message
  }
  return jss.createStyleSheet(userStyle).toString()
}

function load({textarea, output}) {
  const jssStr = localStorage.jss || defaultJSS
  if (jssStr) {
    renderInput(textarea, jssStr)
    renderOutput(output, jssStr)
  }
}

function save(str) {
  localStorage.jss = str
}

function listen({textarea, output}) {
  // React on text input.
  textarea.addEventListener('input', () => {
    setTimeout(() => {
      const {value} = textarea
      save(value)
      renderOutput(output, value)
    })
  })

  // Insert 2 spaces when on tab press.
  textarea.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
      event.preventDefault()
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const str = textarea.value.substr(0, start) + '  ' + textarea.value.substr(end)
      renderInput(textarea, str)
      textarea.selectionStart = textarea.selectionEnd = start + 2
    }
  })
}

function renderInput(textarea, str) {
  textarea.value = str
}

function renderOutput(output, str) {
  output.innerHTML = convert(str)
}

(() => {
  const state = render()
  load(state)
  listen(state)
})()
