// Intend to extend 'styled-system' package
import { isObject, getMediaQuery } from './utils';

// Height property
export function height({ h, height }) {
  let heightValue = h || height;

  if (heightValue) {
    if (!isNaN(heightValue)) {
      heightValue += 'px';
    }

    return { height: heightValue };
  }
}

// Background properties
export function background({ bg, background, backgroundColor, backgroundImage }) {
  if (bg) return { background: bg };
  if (background) return { background };
  if (backgroundColor) return { backgroundColor };
  if (backgroundImage) return { backgroundImage: `url('${backgroundImage}')` };
}

// Float properties
export function float({ fl, fr, floatLeft, floatRight }) {
  if (fl || floatLeft) {
    return { float: 'left', marginRight: 'auto' };
  }

  if (fr || floatRight) {
    return { float: 'right', marginLeft: 'auto' };
  }
}

// Flexbox utils properties
export function flexbox({
  alignSelfStart,
  alignSelfEnd,
  alignSelfCenter,
  alignSelfBaseline,
  alignSelfStretch,

  alignItemsStart,
  alignItemsEnd,
  alignItemsCenter,
  alignItemsBaseline,
  aligneItemsStretch,

  flexRow,
  flexRowReverse,
  flexColumn,
  flexColumnReverse,

  justifyContentStart,
  justifyContentEnd,
  justifyContentCenter,
  justifyContentBetween,
  justifyContentAround,

  mtAuto,
  mrAuto,
  mbAuto,
  mlAuto,
  mAuto,
}) {
  return Object.assign({},
    alignSelfStart && { alignSelf: 'flex-start' },
    alignSelfEnd && { alignSelf: 'flex-end' },
    alignSelfCenter && { alignSelf: 'center' },
    alignSelfBaseline && { alignSelf: 'baseline' },
    alignSelfStretch && { alignSelf: 'stretch' },

    alignItemsStart && { alignItems: 'flex-start' },
    alignItemsEnd && { alignItems: 'flex-end' },
    alignItemsCenter && { alignItems: 'center' },
    alignItemsBaseline && { alignItems: 'baseline' },
    aligneItemsStretch && { alignItems: 'stretch' },

    flexRow && { flexDirection: 'row' },
    flexRowReverse && { flexDirection: 'row-reverse' },
    flexColumn && { flexDirection: 'column' },
    flexColumnReverse && { flexDirection: 'column-reverse' },

    justifyContentStart && { justifyContent: 'flex-start' },
    justifyContentEnd && { justifyContent: 'flex-end' },
    justifyContentCenter && { justifyContent: 'center' },
    justifyContentBetween && { justifyContent: 'space-between' },
    justifyContentAround && { justifyContent: 'space-around' },

    mtAuto && { marginTop: 'auto' },
    mrAuto && { marginRight: 'auto' },
    mbAuto && { marginBottom: 'auto' },
    mlAuto && { marginLeft: 'auto' },
    mAuto && { margin: 'auto' },
  );
}

// Theme Colors properties
export function themeColors({
  bgPrimary,
  bgSecondary,
  bgDanger,
  bgInfo,
  bgNeutral,
  bgSuccess,
  bgWarning,
  primary,
  secondary,
  danger,
  info,
  neutral,
  success,
  warning,
  muted,
  simple,

  theme,
}) {
  return Object.assign({},
    bgPrimary && { backgroundColor: theme.colors.primary },
    bgSecondary && { backgroundColor: theme.colors.secondary },
    bgDanger && { backgroundColor: theme.colors.danger.color },
    bgInfo && { backgroundColor: theme.colors.info.color },
    bgNeutral && { backgroundColor: theme.colors.neutral.color },
    bgSuccess && { backgroundColor: theme.colors.success.color },
    bgWarning && { backgroundColor: theme.colors.warning.color },
    primary && { color: theme.colors.primary, fill: theme.colors.primary },
    secondary && { color: theme.colors.secondary, fill: theme.colors.secondary },
    danger && { color: theme.colors.danger.text, fill: theme.colors.danger.text },
    info && { color: theme.colors.info.text, fill: theme.colors.info.text },
    (neutral || muted) && { color: theme.colors.neutral.text, fill: theme.colors.neutral.text },
    success && { color: theme.colors.success.text, fill: theme.colors.success.text },
    warning && { color: theme.colors.warning.text, fill: theme.colors.warning.text },
    simple && { color: theme.colors.default.text, fill: theme.colors.default.text },
  );
}

// `position` property helper
export function position({
  absolute,
  fixed,
  relative,
}) {
  if (absolute) return { position: 'absolute' };
  if (fixed) return { position: 'fixed' };
  if (relative) return { position: 'relative' };
}

// `font-weight` property helper
export function fontWeight({ fontWeight }) {
  if (fontWeight) return { fontWeight };
}

// Common CSS properties
export function commonCSS({
  textAlign,
  textAlignCenter,
  textAlignLeft,
  textAlignRight,
  textAlignJustify,
}) {
  return Object.assign({},
    textAlign && { textAlign },
    textAlignCenter && { textAlign: 'center' },
    textAlignLeft && { textAlign: 'left' },
    textAlignRight && { textAlign: 'right' },
    textAlignJustify && { textAlign: 'justify' },
  );
}

// Allow easy-written styles for different view sizes
export function mediaQueries({ sm, md, lg, xl, theme }) {
  return Object.assign({},
    isObject(sm) && { [getMediaQuery(theme.mediaQueries.sm)]: sm },
    isObject(md) && { [getMediaQuery(theme.mediaQueries.md)]: md },
    isObject(lg) && { [getMediaQuery(theme.mediaQueries.lg)]: lg },
    isObject(xl) && { [getMediaQuery(theme.mediaQueries.xl)]: xl },
  );
}
