function hasNoBorder({ border, noBorder }) {
  return (border === 0 || noBorder) ? 0 : '1px solid #eee';
}

export default {
  name: 'ButtonGroup',
  type: 'div',
  style: ({ vertical, ...props }) => ({
    display: 'inline-flex',
    flexDirection: vertical ? 'column' : 'initial',
    '& > *': {
      borderRadius: 0,
      border: hasNoBorder(props),
      borderLeft: vertical ? 'auto' : 0,
      borderTop: vertical ? 0 : 'auto',
      '&:first-child': {
        borderRadius: vertical ? '4px 4px 0 0' : '4px 0 0 4px',
        borderLeft: hasNoBorder(props),
        borderTop: hasNoBorder(props),
      },
      '&:last-child': {
        borderRadius: vertical ? '0 0 4px 4px' : '0 4px 4px 0',
      },
    },
  }),
};
