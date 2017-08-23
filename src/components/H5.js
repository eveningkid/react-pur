import { color } from '../properties';

export default {
  name: 'H5',
  type: 'h5',
  style: (props) => ({
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: 700,
    margin: 0,
    color: color(props) || props.theme.colors.default.text,
    '& > *': {
      lineHeight: '18px !important',
    },
  }),
};
