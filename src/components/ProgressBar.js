import { background } from '../properties';

export default {
  name: 'ProgressBar',
  type: 'div',
  style: (props) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: background(props) || props.theme.colors.primary,
    height: '100%',
    color: 'rgba(255, 255, 255, .9)',
    fontSize: '12px',
    fontWeight: 700,
    transition: 'width 250ms',
    '&:first-child': {
      borderTopLeftRadius: '4px',
      borderBottomLeftRadius: '4px',
    },
    '&:last-child': {
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
    },
  }),
};
