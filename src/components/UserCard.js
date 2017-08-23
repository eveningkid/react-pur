export default {
  name: 'UserCard',
  type: 'div',
  style: (props) => ({
    display: 'flex',
    '& > img': {
      height: '32px',
      width: '32px',
      border: 0,
      borderRadius: '50%',
      '& ~ div': {
        marginLeft: '10px',
      },
    },
  }),
};
