export default {
  name: 'CardContent',
  type: 'div',
  style: ({ backgroundImage, shadowed, ...props }) => Object.assign(
    {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '5px',
      position: 'relative',
      padding: '20px',
      '& *': {
        position: 'relative',
        zIndex: 2,
        color: '#ffffff !important',
      },
      '& *:not(p)': {
        margin: '0',
      },
      '& h2': {
        opacity: '.7',
        fontWeight: 500,
        fontSize: '14px',
        marginBottom: '8px !important',
      },
      '& p': {
        opacity: '.9',
        fontWeight: 300,
        fontSize: '14px',
        marginTop: '10px !important',
      },
    },
    shadowed && {
      '&::after': {
        content: '" "',
        position: 'absolute',
        borderRadius: '5px',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(100, 100, 100, .3)',
        zIndex: 1,
      },
    },
  ),
};
