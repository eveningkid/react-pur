export function associate(
  { theme, ...props },
  { property, filter = (value) => value },
) {
  const toStyle = (type) => {
    const fromTheme = theme.colors[type][property];
    return filter(fromTheme);
  };

  if (props.danger) return toStyle('danger');
  if (props.info) return toStyle('info');
  if (props.neutral) return toStyle('neutral');
  if (props.success) return toStyle('success');
  if (props.warning) return toStyle('warning');
  if (props.primary) return filter(theme.colors.primary);
  if (props.secondary) return filter(theme.colors.secondary);
}

export function background(props, filter) {
  return associate(props, { property: 'background', filter });
}

export function border(props, filter) {
  return associate(props, { property: 'color', filter });
}

export function borderColor(props, filter) {
  return associate(props, { property: 'color', filter });
}

export function color(props, filter) {
  return associate(props, { property: 'color', filter });
}
