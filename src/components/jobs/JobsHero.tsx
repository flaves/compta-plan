import React from 'react';
import { css } from '@emotion/react';

import H1 from '../shared/styled/h1';

export interface Props {}

export const JobsHero = (props: Props): JSX.Element => {
  return (
    <section
      css={css`
        padding: 50px 0;
      `}
    >
      <H1
        css={css`
          color: black;
          text-align: center;
        `}
      >
        Offres d'emploi
      </H1>
    </section>
  );
};
