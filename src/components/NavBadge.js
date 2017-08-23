import { background } from '../properties';

export default {
  name: 'NavBadge',
  type: 'div',
  style: (props) => ({
    position: 'absolute',
    top: '50%',
    right: '-8px',
    height: '6px',
    width: '6px',
    borderRadius: '50%',
    backgroundColor: background(props) || props.theme.colors.primary,
    marginTop: '-14px',
  }),
};
