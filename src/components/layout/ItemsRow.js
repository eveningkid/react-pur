// Same as Row, but allows items to be displayed beautifully
// In an easy way

export default {
  name: 'ItemsRow',
  type: 'div',
  style: ({ spaceBetween = '15px', ...props }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginRight: spaceBetween,
      '&:last-child': {
        marginRight: 0,
      },
    },
  }),
};
