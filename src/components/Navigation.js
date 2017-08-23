export default {
  name: 'Navigation',
  type: 'ul',
  style: ({ inverse, fluid, underlined, ...props }) => Object.assign(
    {
      display: 'inline-flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      alignItems: 'center',
      '& > *:first-child': {
        marginLeft: 0,
      },
      '& > *:last-child': {
        marginRight: 0,
      },
    },
    inverse && {
      padding: '1px',
      backgroundColor: '#eeeeee',
      borderRadius: '4px',
      '& > li': {
        backgroundColor: '#eeeeee',
        padding: '12px',
        margin: 0,
        flex: 1,
      },
      '& > li:first-child': {
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
      },
      '& > li:last-child': {
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
      },
    },
    !inverse && underlined && {
      borderBottom: '1px solid #eeeeee',
    },
    fluid && {
      width: '100%',
    },
  ),
};
