export default
`var font = {
  fontSize: 12,
  lineHeight: 1
};

export default {
  button: {
    extend: font,
    border: 'none',
    margin: [5, 10],
    transition: ['background', 'color', 'font-size'],
    transitionDuration: 300,
    background: {
      color: 'white',
      image: 'url("/some/url/image.png")',
      repeat: 'no-repeat',
      position: 'contain'
    },
    '&:before': {
      content: '"icon"'
    }
  },
  text: {
    background: 'blue'
  },
  redButton: {
    extend: 'button',
    background: 'linear-gradient(to right, red 0%, green 100%)',
    fallbacks: {
      background: 'red'
    },
    '&:hover': {
      border: [
        [1, 'solid', 'blue']
      ],
      boxShadow: [
        [0, 0, 0, 10, 'blue'],
        [0, 0, 0, 15, 'green']
      ],
      '& span': {
        color: 'red'
      }
    },
    '&:hover $text': {
      background: 'red'
    },
  },
  '@media (min-width: 1024px)': {
    button: {
      fontSize: 16
    }
  }
};
`
