import React from 'react';
import { css } from '@emotion/core';

const Content: React.FC = () => {
  return (
    <section
      css={css`
        background-color: #f7f7f7;
        padding: 50px 100px;
      `}
    >
      <p>
        Compta Plan est partenaire agréé du Service Public de Wallonie et peut
        vous aider via le dispositif Chèques-entreprises. Afin de soutenir la
        création d’activités, l’innovation, l’économie circulaire et la
        croissance des entreprises, le Service Public de Wallonie à mis
        dispositions une série d’aides au développement.{' '}
      </p>
    </section>
  );
};

export default Content;
