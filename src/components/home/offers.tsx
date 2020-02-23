import React from 'react';
import { css } from '@emotion/core';
import H2 from '../shared/heading/h2';

const Offers: React.FC = () => {
  return (
    <section
      css={css`
        background-color: #f4f4f4;
        padding: 100px;
      `}
    >
      <H2
        css={css`
          max-width: 500px;
        `}
      >
        Des offres adaptées à vos besoins.
      </H2>
    </section>
  );
};

export default Offers;
