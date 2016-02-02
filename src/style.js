const logoSize = 50
const margin = 10

export default {
  repl: {
    fontFamily: 'Verdana',
    fontSize: '14px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  header: {
    display: 'flex',
    borderBottom: '1px solid #333',
    flexShrink: 0,
    '& a': {
      display: 'block',
      margin,
      background: `url(https://avatars1.githubusercontent.com/u/9503099?v=3&s=${logoSize})`,
      width: logoSize,
      height: logoSize
    },
    '& section': {
      margin,
      marginLeft: 0,
      flex: 1,
      '& h2': {
        display: 'inline'
      },
      '& p': {
        margin: 0
      }
    }
  },
  sections: {
    display: 'flex',
    height: '100%'
  },
  section: {
    flex: 1,
    padding: 5
  },
  input: {
    extend: 'section',
    borderRight: '1px solid #333'
  },
  output: {
    extend: 'section'
  }
}
