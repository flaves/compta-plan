import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import reset from './src/styles/reset';
import theme from './src/styles/theme';

interface wrapWithProviderProps {
  element: HTMLElement;
}

export default ({ element }: wrapWithProviderProps) => (
  <>
    <Global styles={reset} />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
);
