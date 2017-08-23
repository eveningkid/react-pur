export default {
  name: 'Fixed',
  type: 'div',
  style: ({ bottom, left, right, top, ...props }) => Object.assign(
    {
      position: 'fixed',
    },
    bottom && { bottom: bottom || 0 },
    left && { left: left || 0 },
    right && { right: right || 0 },
    top && { top: top || 0 },
  ),
};
