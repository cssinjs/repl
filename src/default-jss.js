export default
`var font = {
  fontSize: 12,
  lineHeight: 1
}

return {
  button: {
    extend: font,
    border: 'none',
    transition: [
      'background 0.3s',
      'color 0.3s',
      'font-size 0.3s'
    ].join(' '),
    '&:before': {
      content: '"icon"'
    }
  },
  redButton: {
    extend: 'button',
    background: 'red',
    '&:hover': {
      border: '1px solid blue'
    }
  },
  '@media (min-width: 1024px)': {
    button: {
      fontSize: 16
    }
  }
}
`

