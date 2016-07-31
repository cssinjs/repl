export default
`var font = {
  fontSize: 12,
  lineHeight: 1
};

return {
  button: {
    extend: font,
    border: 'none',
    margin: [[5, 10]],
    transition: ['background', 'color', 'font-size'],
    transitionDuration: 300,
    '&:before': {
      content: '"icon"'
    }
  },
  redButton: {
    extend: 'button',
    background: 'linear-gradient(to right, red 0%, green 100%)',
    fallbacks: {
      background: 'red'
    },
    '&:hover': {
      border: [
        [1, 'solid', 'blue'], [1, 'solid', 'green']
      ]
    }
  },
  '@media (min-width: 1024px)': {
    button: {
      fontSize: 16
    }
  }
};
`
