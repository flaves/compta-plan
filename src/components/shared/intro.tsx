import React from 'react';
import { css } from '@emotion/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import H2 from './styled/h2';

interface IntroProps {
  title: string;
  content: any;
}

const Intro: React.FC<IntroProps> = ({ title, content }) => {
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
      <div
        css={css`
          max-width: 800px;

          p {
            margin-bottom: 1rem;
          }
        `}
      >
        {documentToReactComponents(content)}
      </div>
    </section>
  );
};

export default Intro;
