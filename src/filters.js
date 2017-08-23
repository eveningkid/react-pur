import shader from 'shader';

export function darken(value) {
  return shader(value, -.03);
}

export function lighten(value) {
  return shader(value, .3);
}
