import React from 'react';
import { css } from '@emotion/core';

import H2 from './heading/h2';

interface IntroProps {
  title: string;
  subTitle: string;
}

const Intro: React.FC<IntroProps> = ({ title, subTitle }) => {
  return (
    <section
      css={css`
        color: #a9a9a9;
        font-size: 16px;
        font-weight: 400;
        padding: 70px 100px;
      `}
    >
      <H2>{title}</H2>
      <p
        css={css`
          max-width: 800px;
        `}
      >
        {subTitle}
      </p>
    </section>
  );
};

export default Intro;
