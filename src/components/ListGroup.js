export default {
  name: 'ListGroup',
  type: 'ul',
  style: ({ hovered, ...props }) => Object.assign(
    {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    hovered && {
      '& > li:hover': {
        backgroundColor: 'rgb(245, 245, 245)',
      },
    },
  ),
};
