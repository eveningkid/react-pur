export default {
  name: 'CardFooter',
  type: 'div',
  style: (props) => ({
    backgroundColor: '#ffffff',
    borderRadius: '0 0 5px 5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontWeight: 300,
    color: '#939393',
    fontSize: '14px',
    position: 'relative',
    zIndex: 2,
    '& *:not(p,h1)': {
      margin: '0',
    },
    '& h1': {
      color: '#000000',
    },
    '& h2': {
      color: '#8d8c92',
      fontWeight: 500,
      fontSize: '13px',
      marginBottom: '8px !important',
    },
    '& p': {
      marginTop: '10px !important',
    },
  }),
  props: {
    p: '20px',
    mt: '-5px',
  },
};
