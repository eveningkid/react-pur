import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import objectAssignDeep from '../lib/object-assign-deep';
import theme from '../theme';

const Base = styled.div([], (props) => ({
  '-webkitFontSmoothing': 'antialiased',
  '-mozOsxFontSmoothing': 'grayscale',
  fontFamily: 'sans-serif',
}));

export default function Provider(props) {
  const providerTheme = objectAssignDeep(theme, props.theme);

  return (
    <ThemeProvider theme={providerTheme}>
      <Base {...props} />
    </ThemeProvider>
  );
}
