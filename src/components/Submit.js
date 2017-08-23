import { background } from '../properties';

export default {
  name: 'Submit',
  type: 'input',
  style: ({ block, disabled, ...props }) => Object.assign(
    {
      border: `1px solid ${background(props) || props.theme.colors.primary}`,
      backgroundColor: background(props) || props.theme.colors.primary,
      color: '#ffffff',
      borderRadius: '4px',
      padding: '10px',
      fontSize: '14px',
      display: 'block',
      outline: 'none',
      '&:hover, &:focus, &:active': {
        opacity: '.8',
        cursor: 'pointer',
      },
    },
    block && {
      width: '100%',
    },
    disabled && {
      opacity: '.6',
    },
  ),
  props: {
    type: 'submit',
  },
};
