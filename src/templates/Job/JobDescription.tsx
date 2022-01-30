import React from 'react';
import { css, useTheme } from '@emotion/react';
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';

import mq from '../../styles/mq';

import Container from '../../components/shared/styled/container';
import dayjs from 'dayjs';

interface IntroProps {
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  file: string;
  date: Date;
}

export const JobIntro = ({ content, file, date }: IntroProps): JSX.Element => {
  const { fontWeight } = useTheme();

  return (
    <section
      css={css`
        color: black;
        font-size: 16px;
        font-weight: ${fontWeight.regular};
      `}
    >
      <Container>
        <div
          css={css`
            ${mq(`md`)} {
              max-width: 800px;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin-bottom: 0.5rem;
            }

            p {
              margin-bottom: 1rem;
            }
          `}
        >
          {renderRichText(content)}
        </div>
        <div
          css={css`
            margin-bottom: 20px;
          `}
        >
          <a
            href={file}
            target="_blank"
            css={css`
              color: hsl(34, 98%, 49%);
              font-weight: 700;
              text-decoration: underline;
            `}
          >
            Télécharger le fichier lié
          </a>
        </div>
        <div>
          <p>Posté le {dayjs(date).format(`DD/MM/YYYY`)}</p>
        </div>
      </Container>
    </section>
  );
};
