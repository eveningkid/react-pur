export default {
  name: 'Truncate',
  type: 'span',
  style: (props) => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
};
