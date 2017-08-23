export default {
  name: 'InputGroup',
  type: 'div',
  style: ({ shadowed, ...props }) => Object.assign(
    {
      display: 'inline-flex',
      borderRadius: '4px',
      '& > *': {
        borderRadius: 0,
        '&:first-child': {
          borderRadius: '4px 0 0 4px',
        },
        '&:last-child': {
          borderRadius: '0 4px 4px 0',
        },
      },
    },
    shadowed && {
      boxShadow: '0 1px 3px 0px rgba(0, 0, 0, .08)',
    },
  ),
};
