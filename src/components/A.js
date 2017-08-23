import { color } from '../properties';

export default {
  name: 'A',
  type: 'a',
  style: ({ underlined, noHover, ...props }) => Object.assign(
    {
      textDecoration: 'none',
      color: color(props) || props.theme.colors.primary,
      opacity: 1,
    },
    !noHover && {
      '&:hover': {
        opacity: .8,
      },
    },
    underlined && {
      textDecoration: 'underline',
      textDecorationSkip: 'ink',
    },
  ),
  props: {
    rel: 'noopener noreferer',
  },
};
