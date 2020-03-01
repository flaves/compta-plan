import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import mq from '../../styles/mq';
import Link from '../shared/link';

import H2 from '../shared/styled/h2';
import Container from '../shared/styled/container';

import { ThemeType } from '../../styles/theme';
import useOnScreen from '../../hooks/useOnScreen';
import SubTitle from '../shared/styled/sub-title';

const Bonus: React.FC = () => {
  const { color, fontWeight } = useTheme<ThemeType>();
  const [ref, onScreen] = useOnScreen();

  return (
    <section
      css={css`
        padding: 0 20px;

        ${mq(`md`)} {
          padding: 150px 0;
        }
      `}
      ref={ref}
    >
      <Container>
        <div
          css={css`
            ${mq(`md`)} {
              display: flex;
              margin: 0 -1rem;
            }
          `}
        >
          <div
            css={css`
              ${mq(`md`)} {
                flex: 0 0 50%;
                max-width: 50%;
                padding: 0 1rem;
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
                padding: 0 1rem;
              }
            `}
          >
            <H2
              css={css`
                max-width: 450px;
              `}
            >
              Vos primes et
              <br />
              subsides.
            </H2>
            <p
              css={css`
                font-size: 16px;
                font-weight: ${fontWeight.medium};
                color: #a9a9a9;
                margin-bottom: 40px;
              `}
            >
              Vous êtes un porteur de projet, une starter, une PME,
              <br /> un indépendant, un indépendant à titre complémentaire ?
            </p>
            <Link to="/primes-subsides" size="lg">
              En savoir plus
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Bonus;
