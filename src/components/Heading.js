import { color } from '../properties';

export default {
  name: 'Heading',
  type: 'h1',
  style: (props) => ({
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '28px',
    marginBottom: '10px',
    color: color(props) || props.theme.colors.default.text,
    '& > *': {
      lineHeight: '28px !important',
    },
  }),
};
