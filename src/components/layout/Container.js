export default {
  name: 'Container',
  type: 'div',
  style: ({ bordered, fluid, ...props }) => ({
    margin: 'auto',
    width: fluid ? '100%': 'auto',
    border: bordered ? '1px solid #eeeeee' : 0,
  }),
};
