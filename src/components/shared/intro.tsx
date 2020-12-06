import React from 'react';
import { css, useTheme } from '@emotion/react';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';

import mq from '../../styles/mq';

import H2 from './styled/h2';
import Container from './styled/container';

interface IntroProps {
  title: string;
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

const Intro: React.FC<IntroProps> = ({ title, content }) => {
  const { fontWeight } = useTheme();

  return (
    <section
      css={css`
        color: #a9a9a9;
        font-size: 16px;
        font-weight: ${fontWeight.regular};
      `}
    >
      <Container>
        <H2>{title}</H2>
        <div
          css={css`
            ${mq(`md`)} {
              max-width: 800px;
            }

            p {
              margin-bottom: 1rem;
            }
          `}
        >
          {renderRichText(content)}
        </div>
      </Container>
    </section>
  );
};

export default Intro;
