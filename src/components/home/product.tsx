import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import More from '../shared/more';
import mq from '../../styles/mq';

import H2 from '../shared/heading/h2';

import { ThemeType } from '../../styles/theme';

interface FeatureType {
  label: string;
  content: string;
}

const features: FeatureType[] = [
  {
    label: `Déposez vos fichiers`,
    content: `Etiam tellus nunc, facilisis sit amet mattis eu, congue eget dolor.
Integer semper commodo est.`,
  },
  {
    label: `Consultez vos
chiffres`,
    content: `Etiam tellus nunc, facilisis sit amet mattis eu, congue eget dolor.
Integer semper commodo est.`,
  },
  {
    label: `Créez vos
factures`,
    content: `Etiam tellus nunc, facilisis sit amet mattis eu, congue eget dolor.
Integer semper commodo est.`,
  },
];

const Product: React.FC = () => {
  const { color, fontWeight } = useTheme<ThemeType>();

  const renderFeatures = () => (
    <ul
      css={css`
        ${mq(`md`)} {
          display: flex;
          margin: 0 -2rem;
        }
      `}
    >
      {features.map(feature => (
        <li
          css={css`
            ${mq(`md`)} {
              flex: 0 0 33.3333333%;
              max-width: 33.3333333%;
              padding: 0 2rem;
            }
          `}
        >
          <article>
            <div
              css={css`
                margin-bottom: 15px;
              `}
            >
              <h3
                css={css`
                  font-size: 24px;
                  font-weight: ${fontWeight.semiBold};
                  color: ${color.heading};
                `}
              >
                {feature.label}
              </h3>
            </div>
            <p
              css={css`
                color: #a9a9a9;
              `}
            >
              {feature.content}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      css={css`
        padding: 0 20px;
        margin-bottom: 100px;

        ${mq(`md`)} {
          padding: 0 150px;
        }
      `}
    >
      <div
        css={css`
          margin-bottom: 120px;

          ${mq(`md`)} {
            display: flex;
          }
        `}
      >
        <div
          css={css`
            ${mq(`md`)} {
              flex: 0 0 50%;
              max-width: 50%;
            }
          `}
        >
          w
        </div>
        <div
          css={css`
            ${mq(`md`)} {
              flex: 0 0 50%;
              max-width: 50%;
            }
          `}
        >
          <H2
            css={css`
              max-width: 450px;
            `}
          >
            Votre situation au bout du doigt.
          </H2>
          <p
            css={css`
              font-size: 16px;
              font-weight: ${fontWeight.medium};
              color: #a9a9a9;
              margin-bottom: 40px;
            `}
          >
            Aliquam dictum, libero non malesuada vehicula, augue est tempor
            urna, sit amet accumsan nisl eros nec erat.
          </p>
          <More to="/">En savoir plus</More>
        </div>
      </div>
      <div>{renderFeatures()}</div>
    </section>
  );
};

export default Product;
