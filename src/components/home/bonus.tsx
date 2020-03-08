import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import BonusImage from '../../svg/home/bonus.svg';

import mq from '../../styles/mq';
import Link from '../shared/link';
import useOnScreen from '../../hooks/useOnScreen';

import H2 from '../shared/styled/h2';
import Container from '../shared/styled/container';

import { ThemeType } from '../../styles/theme';

const Bonus: React.FC = () => {
  const { fontWeight } = useTheme<ThemeType>();
  const [ref] = useOnScreen();

  return (
    <section ref={ref}>
      <Container>
        <div
          css={css`
            ${mq(`md`)} {
              display: flex;
              margin: 0 -2rem;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 2rem;

              ${mq(`md`)} {
                flex: 0 0 50%;
                max-width: 50%;
                padding: 0 2rem;
              }
            `}
          >
            <div
              css={css`
                width: 300px;
              `}
            >
              <BonusImage />
            </div>
          </div>
          <div
            css={css`
              ${mq(`md`)} {
                flex: 0 0 50%;
                max-width: 50%;
                padding: 10px 2rem 0 2rem;
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
            <Link to="/nos-solutions/primes-subsides" size="lg">
              En savoir plus
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Bonus;
