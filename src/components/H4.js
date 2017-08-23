import { color } from '../properties';

export default {
  name: 'H4',
  type: 'h4',
  style: (props) => ({
    fontSize: '20px',
    lineHeight: '20px',
    fontWeight: 700,
    margin: 0,
    color: color(props) || props.theme.colors.default.text,
    '& > *': {
      lineHeight: '20px !important',
    },
  }),
};
