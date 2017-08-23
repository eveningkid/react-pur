export default {
  name: 'BreadcrumbItem',
  type: 'div',
  style: ({ active, ...props }) => Object.assign(
    {
      color: '#333',
      display: 'inline-block',
      position: 'relative',
      '&::after': {
        content: '"›"',
        margin: '0 8px',
      },
      '&:last-child': {
        '&::after': {
          display: 'none',
        },
      },
    },
    active && { color: '#777' },
  ),
};
