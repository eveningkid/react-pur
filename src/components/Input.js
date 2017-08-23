import mount from '../mount';
import { color } from '../properties';
import Submit from './Submit';

export default {
  name: 'Input',
  type: 'input',
  style: ({ disabled, focused, pill, small, type, ...props }) => {
    if (type === 'submit') {
      return mount(Submit).style({ disabled, ...props });
    }

    return Object.assign(
      {
        border: '1px solid #eeeeee',
        borderRadius: '4px',
        padding: '10px',
        margin: 0,
        fontSize: '14px',
        width: 'calc(100% - 20px)',
        display: 'block',
        outline: 'none',
        '&:focus, &:active': {
          borderColor: color(props) || props.theme.colors.primary,
        },
      },
      disabled && {
        opacity: '.6',
      },
      pill && {
        borderRadius: '20px',
      },
      focused && {
        borderColor: color(props) || props.theme.colors.primary,
      },
      small && {
        padding: '5px 10px',
        fontSize: '12px',
      },
    );
  },
};
