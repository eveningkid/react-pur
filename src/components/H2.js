import { color } from '../properties';

export default {
  name: 'H2',
  type: 'h2',
  style: (props) => ({
    fontSize: '26px',
    lineHeight: '26px',
    fontWeight: 700,
    margin: 0,
    color: color(props) || props.theme.colors.default.text,
    '& > *': {
      lineHeight: '26px !important',
    },
  }),
};
