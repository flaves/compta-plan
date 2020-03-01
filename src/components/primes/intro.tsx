import React from 'react';
import { css } from '@emotion/core';

import H2 from '../shared/styled/h2';

const Intro: React.FC = () => {
  return (
    <section
      css={css`
        color: #a9a9a9;
        font-size: 16px;
        font-weight: 400;
        padding: 70px 100px;
      `}
    >
      <H2>Quelles types d’aides ?</H2>
      <p
        css={css`
          max-width: 800px;
        `}
      >
        Plusieurs aides sous formes de primes et subsides ont été mis en place
        pour soutenir le développement économique et permettre aux entrepreneurs
        de lancer ou développer leur activité.
      </p>
    </section>
  );
};

export default Intro;
