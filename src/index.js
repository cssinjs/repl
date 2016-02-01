import template from 'lodash/template'
import jss from './jss'
import layoutHtml from './layout.html'
import style from './style'
import defaultJSS from './default-jss'

const layout = template(layoutHtml)
const sheet = jss.createStyleSheet(style)
let textarea, output

function render() {
  document.body.innerHTML = layout({
    classes: sheet.classes
  })
  textarea = document.getElementsByClassName(sheet.classes.textarea)[0]
  output = document.getElementsByClassName(sheet.classes.output)[0]
  sheet.attach()
  textarea.focus()
}

function convert(str) {
  let style
  try {
    const fn = new Function(`${str}`)
    style = fn()
  } catch (err) {
    return err.message
  }
  const sheet = jss.createStyleSheet(style)
  return sheet.toString()
}

function load() {
  let jss = localStorage.jss || defaultJSS
  if (jss) {
    renderInput(jss)
    renderOutput(jss)
  }
}

function save(str) {
  localStorage.jss = str
}

function listen() {
  textarea.addEventListener('input', () => {
    setTimeout(() => {
      const {value} = textarea
      save(value)
      renderOutput(value)
    })
  })

  // Insert 2 spaces when on tab press.
  textarea.addEventListener('keydown', e => {
    if (e.keyCode === 9) {
      e.preventDefault()
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const str = textarea.value.substr(0, start) + '  ' + textarea.value.substr(end)
      renderInput(str)
      textarea.selectionStart = textarea.selectionEnd = start + 2
    }
  })
}

function renderInput(str) {
  textarea.value = str
}

function renderOutput(str) {
  output.innerHTML = convert(str)
}

render()
load()
listen()
