import { color } from '../properties';

export default {
  name: 'Small',
  type: 'small',
  style: (props) => ({
    display: 'inline-block',
    fontSize: '12px',
    lineHeight: '12px',
    alignItems: 'center',
    color: color(props) || props.theme.colors.disabled,
  }),
};
