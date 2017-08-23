export default {
  name: 'Card',
  type: 'div',
  style: ({ border, fluid, rounded, shadowed, ...props }) => Object.assign(
    {
      display: 'flex',
      flexDirection: 'column',
      '& > img': {
        maxWidth: '100%',
      },
      'h1': {
        lineHeight: 'inherit !important',
      },
    },
    border && {
      border: '1px solid #eeeeee',
    },
    fluid && {
      height: border ? 'calc(100% - 2px)' : '100%',
    },
    rounded && {
      borderRadius: !isNaN(rounded) ? rounded + 'px' : '4px',
    },
    shadowed && {
      boxShadow: '0px 12px 30px -6px rgba(147, 147, 147, .5)',
    },
  ),
};
