import { css } from '@emotion/react';

// Fonts
import Regular from './galano-grotesque.otf';
import Medium from './galano-grotesque-medium.otf';
import SemiBold from './galano-grotesque-semi-bold.otf';
import Bold from './galano-grotesque-bold.otf';
import Black from './galano-grotesque-black.otf';
import Heavy from './galano-grotesque-heavy.otf';

export const fonts = css`
  @font-face {
    font-family: Galano;
    font-weight: 400;
    src: url(${Regular});
  }

  @font-face {
    font-family: Galano;
    font-weight: 500;
    src: url(${Medium});
  }

  @font-face {
    font-family: Galano;
    font-weight: 600;
    src: url(${SemiBold});
  }

  @font-face {
    font-family: Galano;
    font-weight: 700;
    src: url(${Bold});
  }

  @font-face {
    font-family: Galano;
    font-weight: 800;
    src: url(${Black});
  }

  @font-face {
    font-family: Galano;
    font-weight: 900;
    src: url(${Heavy});
  }
`;
