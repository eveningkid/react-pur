import { color } from '../properties';

export default {
  name: 'H6',
  type: 'h6',
  style: (props) => ({
    fontSize: '16px',
    lineHeight: '16px',
    fontWeight: 700,
    margin: 0,
    color: color(props) || props.theme.colors.default.text,
    '& > *': {
      lineHeight: '16px !important',
    },
  }),
};
