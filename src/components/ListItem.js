import { background } from '../properties';

export default {
  name: 'ListItem',
  type: 'li',
  style: ({ active, disabled, isHeader, ...props }) => Object.assign(
    {
      display: 'flex',
      justifyContent: 'space-between',
      borderTop: `1px solid ${background(props) || '#eeeeee'}`,
      fontSize: '14px',
      alignItems: 'center',
      padding: '8px 0',
      '&:first-child': {
        borderTop: 0,
      },
    },
    active && {
      backgroundColor: background(props) || '#eeeeee',
      marginBottom: '-1px',
      borderTop: 0,
    },
    disabled && {
      color: props.theme.colors.disabled,
      cursor: 'not-allowed',
    },
    isHeader && {
      fontSize: '80%',
      opacity: .8,
      borderTop: 0,
      marginTop: '6px',
      fontWeight: 500,
      textTransform: 'uppercase',
      '&:hover': {
        backgroundColor: 'initial !important',
      },
    },
  ),
};
