import React, { useCallback } from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { animated as a, useSpring } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartPie,
  faFileInvoice,
  faFolders,
} from '@fortawesome/pro-solid-svg-icons';

import Dashboard from '../../svg/home/dashboard.svg';

import mq from '../../styles/mq';
import Link from '../shared/link';

import H2 from '../shared/styled/h2';

interface FeatureType {
  icon: any;
  label: string;
  content: string;
}

const features: FeatureType[] = [
  {
    icon: faFolders,
    label: `Déposez vos fichiers`,
    content: `Envoi de vos documents par mail mais aussi via l’export d’un PDF.`,
  },
  {
    icon: faChartPie,
    label: `Consultez vos chiffres`,
    content: `Gestion de vos statistiques via un dashboard très intuitif.`,
  },
  {
    icon: faFileInvoice,
    label: `Créez vos
factures`,
    content: `Gestion de vos contact clients, de vos devis, factures et rappels.`,
  },
];

const FeatureContainer = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 0 16px;

  ${mq('sm')} {
    max-width: 1280px;
    padding: 0 24px;
  }
`;

const Product: React.FC = () => {
  const { color, fontWeight } = useTheme();
  const [ref, inView] = useInView();
  const reveal = useSpring({
    opacity: inView ? 1 : 0,
    config: {
      friction: 80,
    },
  });

  const renderFeatures = useCallback(
    () => (
      <ul
        css={css`
          padding-bottom: 70px;

          ${mq(`md`)} {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -2rem;
          }

          ${mq(`lg`)} {
            flex-wrap: initial;
          }
        `}
      >
        {features?.map((feature, key) => (
          <li
            key={key}
            css={css`
              margin-bottom: 2rem;

              ${mq(`md`)} {
                flex: 0 0 50%;
                max-width: 50%;
                padding: 0 2rem;
              }

              ${mq(`lg`)} {
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
                  display: flex;
                  align-items: center;
                `}
              >
                <FontAwesomeIcon
                  icon={feature?.icon}
                  size="2x"
                  css={css`
                    margin-right: 30px;
                  `}
                  color="#afafaf"
                />
                <h3
                  css={css`
                    color: ${color.heading};
                    font-size: 20px;
                    font-weight: ${fontWeight.semiBold};
                    max-width: 170px;

                    ${mq(`md`)} {
                      font-size: 24px;
                    }
                  `}
                >
                  {feature?.label}
                </h3>
              </div>
              <p
                css={css`
                  color: #a9a9a9;
                  max-width: 300px;
                `}
              >
                {feature?.content}
              </p>
            </article>
          </li>
        ))}
      </ul>
    ),
    [color.heading, fontWeight.semiBold]
  );

  return (
    <a.section ref={ref} style={reveal}>
      <FeatureContainer>
        <div
          css={css`
            margin-bottom: 120px;
            padding-top: 50px;

            ${mq(`md`)} {
              display: flex;

              margin: 0 -2rem 120px -2rem;
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
                justify-content: flex-start;
              }
            `}
          >
            <div
              css={css`
                width: 400px;
              `}
            >
              <Dashboard />
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
              My Compta Plan
            </H2>
            <p
              css={css`
                font-size: 16px;
                font-weight: ${fontWeight.medium};
                color: #a9a9a9;
                margin-bottom: 40px;
                max-width: 500px;
              `}
            >
              Via votre espace <b>My Compta Plan</b>, vous gardez un oeil sur
              l’évolution quotidienne de votre activité et gérez en ligne tous
              les aspects de votre comptabilité.
            </p>
            <Link to="/nos-solutions/my-comptaplan" size="lg">
              En savoir plus
            </Link>
          </div>
        </div>
        {/* <div>{renderFeatures()}</div> */}
        <FeatureContainer>{renderFeatures()}</FeatureContainer>
      </FeatureContainer>
    </a.section>
  );
};

export default Product;
