import { background, color } from '../properties';

export default {
  name: 'Alert',
  type: 'div',
  style: (props) => ({
    padding: '8px 10px',
    fontSize: '14px',
    fontWeight: 500,
    borderRadius: '3px',
    marginBottom: '1rem',
    color: color(props) || props.theme.colors.default.text,
    backgroundColor: background(props) || props.theme.colors.default.background,
  }),
};
