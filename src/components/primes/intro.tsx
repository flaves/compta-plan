import React from 'react';
import { css } from '@emotion/react';

import H2 from '../shared/styled/h2';
import Container from '../shared/styled/container';

const Intro: React.FC = () => {
  return (
    <section
      css={css`
        color: #a9a9a9;
        font-size: 16px;
        font-weight: 400;
      `}
    >
      <Container>
        <H2>Quelles types d’aides ?</H2>
        <p
          css={css`
            max-width: 800px;
          `}
        >
          Plusieurs aides sous formes de primes et subsides ont été mis en place
          pour soutenir le développement économique et permettre aux
          entrepreneurs de lancer ou développer leur activité.
        </p>
      </Container>
    </section>
  );
};

export default Intro;
