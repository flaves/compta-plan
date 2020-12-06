import React from 'react';
import { css, useTheme } from '@emotion/react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

import mq from '../../styles/mq';

import H2 from './styled/h2';
import Container from './styled/container';

import { ThemeType } from '../../styles/theme';

interface IntroProps {
  title: string;
  content: Document;
}

const Intro: React.FC<IntroProps> = ({ title, content }) => {
  const { fontWeight } = useTheme<ThemeType>();

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
          {documentToReactComponents(content)}
        </div>
      </Container>
    </section>
  );
};

export default Intro;
