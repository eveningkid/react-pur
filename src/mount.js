import styled from 'styled-components';
import { color, fontSize, space, width } from 'styled-system';
import {
  background,
  commonCSS,
  flexbox,
  float,
  fontWeight,
  height,
  position,
  themeColors,
  mediaQueries,
} from './extra-styled-system';
import { compose } from 'recompose';
import tag from 'tag-hoc';
import styleProps from './style-props';

function withStyle(style, props) {
  return (Component) => {
    const Base = styled(Component)([], style);

    const Comp = styled(Base)
      .attrs(props)
      ([],
        background,
        color,
        commonCSS,
        fontSize,
        float,
        flexbox,
        height,
        space,
        width,
        themeColors,
        position,
        fontWeight,
        mediaQueries,
      );

    return Comp;
  };
}

const Tag = tag(styleProps);

function mount({ name, props = {}, style = () => {}, type = 'div' }) {
  return compose(
    withStyle(style, props),
    Tag,
  )(type);
}

export default mount;
