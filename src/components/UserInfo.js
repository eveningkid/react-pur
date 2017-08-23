export default {
  name: 'UserInfo',
  type: 'div',
  style: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: '14px',
    lineHeight: '14px',
    fontWeight: 500,
    '& > *': {
      margin: '0 !important',
      padding: '0 !important',
    },
  }),
};
