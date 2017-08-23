import { color } from '../properties';

export default {
  name: 'PageItem',
  type: 'li',
  style: ({ active, disabled, ...props }) => Object.assign(
    {
      display: 'inline-block',
      border: '1px solid #eeeeee',
      borderRightWidth: 0,
      padding: '8px',
      '&:first-child': {
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
      },
      '&:last-child': {
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
        borderRightWidth: '1px',
      },
    },
    active && {
      color: color(props) || props.theme.colors.primary,
    },
    disabled && {
      color: props.theme.colors.disabled,
    },
    !disabled && !active && {
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'rgb(245, 245, 245)',
      },
    },
  ),
};
