import ject from 'ject'
import jss from './jss'
import layout from './layout.html'
import style from './style'
import defaultJSS from './default-jss'

const sheet = jss.createStyleSheet(style)
let textarea
let output

function render() {
  document.body.innerHTML = ject(layout, sheet.classes)
  textarea = document.getElementsByClassName(sheet.classes.textarea)[0]
  output = document.getElementsByClassName(sheet.classes.output)[0]
  sheet.attach()
  textarea.focus()
}

function convert(str) {
  let userStyle
  try {
    const fn = new Function(`${str}`) // eslint-disable-line no-new-func
    userStyle = fn()
  }
  catch (err) {
    console.error(err)
    return err.message
  }
  const userSheet = jss.createStyleSheet(userStyle)
  return userSheet.toString()
}

function load() {
  const jssStr = localStorage.jss || defaultJSS
  if (jssStr) {
    renderInput(jssStr)
    renderOutput(jssStr)
  }
}

function save(str) {
  localStorage.jss = str
}

function listen() {
  textarea.addEventListener('input', () => {
    setTimeout(() => {
      const {value} = textarea
      save(value)
      renderOutput(value)
    })
  })

  // Insert 2 spaces when on tab press.
  textarea.addEventListener('keydown', event => {
    if (event.keyCode === 9) {
      event.preventDefault()
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const str = textarea.value.substr(0, start) + '  ' + textarea.value.substr(end)
      renderInput(str)
      textarea.selectionStart = textarea.selectionEnd = start + 2
    }
  })
}

function renderInput(str) {
  textarea.value = str
}

function renderOutput(str) {
  output.innerHTML = convert(str)
}

render()
load()
listen()
