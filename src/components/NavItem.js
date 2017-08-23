import { background, color } from '../properties';

export default {
  name: 'NavItem',
  type: 'li',
  style: ({ active, cursor, filled, underlined, ...props }) => Object.assign(
    {
      display: 'inline-block',
      transition: 'opacity 250ms',
      margin: '0 12px',
      padding: '12px 0',
      textAlign: 'center',
      position: 'relative',
      lineHeight: '100%',
    },
    active && {
      color: color(props) || props.theme.colors.primary,
      backgroundColor: '#ffffff !important',
    },
    cursor && {
      '&:hover': {
        opacity: '.6',
        cursor: 'pointer',
      },
    },
    underlined && {
      borderBottom: `1px solid ${color(props) || props.theme.colors.primary}`,
      marginBottom: '-1px',
    },
    filled && {
      color: '#ffffff',
      padding: '6px',
      margin: '6px',
      borderRadius: '4px',
      backgroundColor: background(props) || props.theme.colors.primary,
    },
  ),
};
