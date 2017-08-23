import { background, border, borderColor, color } from '../properties';
import { darken, lighten } from '../filters';

function buttonFontSize({ large, small }) {
  if (large) return '1.25rem';
  if (small) return '12px';
  return '14px';
}

function buttonPadding({ large, small }) {
  if (large) return '.75rem 1.5rem';
  if (small) return '.25rem .5rem';
  return '8px';
}

export default {
  name: 'Button',
  type: 'button',
  style: ({ block, disabled, large, outline, pill, small, ...props }) => Object.assign(
    {
      fontSize: buttonFontSize({ small, large }),
      padding: buttonPadding({ small, large }),
      borderRadius: '4px',
      fontWeight: small ? 500 : 'bold',
      textAlign: 'center',
      border: 0,
      margin: 0,
      width: block ? '100%' : 'auto',
      color: color(props) || '#ffffff',
      backgroundColor: background(props) || props.theme.colors.primary,
      '&:hover': {
        backgroundColor: background(props, darken) || props.theme.colors.primary,
      },
    },
    pill && {
      borderRadius: '10rem',
    },
    outline && {
      fontWeight: 500,
      backgroundColor: '#ffffff',
      border: `1px solid ${border(props) || props.theme.colors.default.color}`,
      '&:hover': {
        opacity: '.6',
      },
    },
    disabled && {
      cursor: 'not-allowed',
      opacity: '.5',
    },
  ),
};
