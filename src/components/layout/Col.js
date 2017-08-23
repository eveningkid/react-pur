import { isObject, getMediaQuery } from '../../utils';

function getFlexForMediaQuery(prop) {
  let value = prop;

  if (typeof prop === 'boolean') {
    value = 12;
  }

  return { flex: `0 0 ${(value / 12) * 100}%` };
}

export default {
  name: 'Col',
  type: 'div',
  style: ({ size, sm, md, lg, xl, ...props }) => Object.assign(
    {
      flex: '1 1 0%',
    },
    size && { [getMediaQuery(0)]: getFlexForMediaQuery(size) },
    sm && { [getMediaQuery(props.theme.mediaQueries.sm)]: getFlexForMediaQuery(sm) },
    md && { [getMediaQuery(props.theme.mediaQueries.md)]: getFlexForMediaQuery(md) },
    lg && { [getMediaQuery(props.theme.mediaQueries.lg)]: getFlexForMediaQuery(lg) },
    xl && { [getMediaQuery(props.theme.mediaQueries.xl)]: getFlexForMediaQuery(xl) },
  ),
};
