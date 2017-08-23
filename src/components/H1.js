import { color } from '../properties';

export default {
  name: 'H1',
  type: 'h1',
  style: (props) => ({
    fontSize: '28px',
    lineHeight: '28px',
    fontWeight: 700,
    margin: 0,
    color: color(props) || props.theme.colors.default.text,
    '& > *': {
      lineHeight: '28px !important',
    },
  }),
};
