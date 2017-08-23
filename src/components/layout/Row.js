export default {
  name: 'Row',
  type: 'div',
  style: ({ fluid, ...props }) => Object.assign(
    {
      display: 'flex',
      flexWrap: 'wrap',
    },
    fluid && {
      width: '100%',
    },
  ),
};
