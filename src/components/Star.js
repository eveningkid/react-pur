import { color } from '../properties';

// From https://github.com/jxnblk/rebass/blob/master/src/components.js#L1112

export default {
  name: 'Star',
  type: 'div',
  style: ({ checked, half, ...props }) => ({
    position: 'relative',
    width: '1em',
    height: '1em',
    color: checked ? (color(props) || props.theme.colors.primary) : '#eeeeee',
    '&::after': {
      display: half ? 'block' : 'none',
      content: '"★"',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '1em',
      height: '1em',
      color: color(props) || props.theme.colors.primary,
      clip: 'rect(0, .45em, 1em, 0)'
    },
  }),
  props: {
    children: '★',
  },
};
