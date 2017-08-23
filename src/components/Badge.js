import { background, color } from '../properties';

export default {
  name: 'Badge',
  type: 'span',
  style: ({ pill, ...props }) => ({
    fontSize: '10px',
    fontWeight: 700,
    display: 'inline-block',
    color: '#fff',
    padding: '5px 8px',
    borderRadius: pill ? '10rem' : '4px',
    color: color(props) || props.theme.colors.neutral.text,
    backgroundColor: background(props) || props.theme.colors.neutral.background,
  }),
};
