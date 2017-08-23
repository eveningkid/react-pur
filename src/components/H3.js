import { color } from '../properties';

export default {
  name: 'H3',
  type: 'h3',
  style: (props) => ({
    fontSize: '22px',
    lineHeight: '22px',
    fontWeight: 700,
    margin: 0,
    color: color(props) || props.theme.colors.default.text,
    '& > *': {
      lineHeight: '22px !important',
    },
  }),
};
