import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string;
      accent: string;
      background: string;
      heading: string;
      text: string;
      success: string;
      warning: string;
      error: string;
      black: string;
      white: string;
    };
    fontWeight: {
      thin: number;
      extraLight: number;
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      black: number;
      heavy: number;
    };
  }
}

const theme = {
  color: {
    primary: `hsl(34, 98%, 49%)`,
    accent: `hsl(215, 70%, 37%)`,
    background: `hsl(0, 0%, 9%)`,
    heading: `hsl(0, 0%, 0%)`,
    text: `hsl(0, 0%, 0%)`,
    success: `hsl(145, 63%, 50%)`,
    warning: `hsl(46, 100%, 60%)`,
    error: `hsl(0, 100%, 70%)`,
    black: `hsl(0, 0%, 0%)`,
    white: `hsl(0, 0%, 100%)`,
  },
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    black: 800,
    heavy: 900,
  },
};

export default theme;
