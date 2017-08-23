const initialLabel = ({ uppercased }) => Object.assign(
  {
    fontSize: '14px',
    transition: 'opacity 250ms, top 250ms',
    position: 'relative',
    color: '#555555',
    display: 'block',
    marginTop: '3px',
    marginBottom: '5px',
    fontWeight: 700,
  },
  uppercased && {
    textTransform: 'uppercase',
    fontSize: '12px',
  },
);

export default {
  name: 'Label',
  type: 'label',
  style: ({ invisible, ...props }) => Object.assign(
    {
      ...initialLabel(props),
      opacity: 1,
      top: '-3px',
    },
    // NOTE: Sadly, I couldn't use 'hidden' here :(
    invisible && {
      ...initialLabel(props),
      opacity: 0,
      top: 0,
    },
  ),
};
