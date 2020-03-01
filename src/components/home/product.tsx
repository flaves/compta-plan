import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';
import { animated as a, useSpring } from 'react-spring';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolders,
  faChartPie,
  faFileInvoice,
} from '@fortawesome/pro-solid-svg-icons';

import mq from '../../styles/mq';
import useOnScreen from '../../hooks/useOnScreen';
import Link from '../shared/link';

import Container from '../shared/styled/container';
import H2 from '../shared/styled/h2';

import { ThemeType } from '../../styles/theme';

interface FeatureType {
  icon: any;
  label: string;
  content: string;
}

const features: FeatureType[] = [
  {
    icon: faFolders,
    label: `Déposez vos fichiers`,
    content: `Etiam tellus nunc, facilisis sit amet mattis eu, congue eget dolor.
Integer semper commodo est.`,
  },
  {
    icon: faChartPie,
    label: `Consultez vos chiffres`,
    content: `Etiam tellus nunc, facilisis sit amet mattis eu, congue eget dolor.
Integer semper commodo est.`,
  },
  {
    icon: faFileInvoice,
    label: `Créez vos
factures`,
    content: `Etiam tellus nunc, facilisis sit amet mattis eu, congue eget dolor.
Integer semper commodo est.`,
  },
];

const Product: React.FC = () => {
  const { color, fontWeight } = useTheme<ThemeType>();
  const [ref, onScreen] = useOnScreen(500);
  const reveal = useSpring({
    opacity: onScreen ? 1 : 0,
    config: {
      friction: 80,
    },
  });
  const { product } = useStaticQuery(query);

  const renderFeatures = () => (
    <ul
      css={css`
        ${mq(`md`)} {
          display: flex;
          margin: 0 -2rem;
        }
      `}
    >
      {features?.map((feature, key) => (
        <li
          key={key}
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
                  font-size: 24px;
                  font-weight: ${fontWeight.semiBold};
                  max-width: 170px;
                `}
              >
                {feature?.label}
              </h3>
            </div>
            <p
              css={css`
                color: #a9a9a9;
              `}
            >
              {feature?.content}
            </p>
          </article>
        </li>
      ))}
    </ul>
  );

  return (
    <a.section
      css={css`
        padding: 0 20px;

        ${mq(`md`)} {
          padding: 150px 0;
        }
      `}
      ref={ref}
      style={reveal}
    >
      <Container>
        <div
          css={css`
            margin-bottom: 120px;

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

              ${mq(`md`)} {
                flex: 0 0 50%;
                max-width: 50%;
                padding: 0 2rem;
              }
            `}
          >
            <div
              css={css`
                width: 600px;
              `}
            >
              <Img fluid={product.childImageSharp.fluid} />
            </div>
          </div>
          <div
            css={css`
              ${mq(`md`)} {
                flex: 0 0 50%;
                max-width: 50%;
                padding: 50px 2rem 0 2rem;
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
              Si vous êtes client chez comptaplan, vous bénéficiez gratuitement
              d’un accès illimités à nos outils digitaux.
            </p>
            <Link to="/nos-solutions/my-comptaplan" size="lg">
              En savoir plus
            </Link>
          </div>
        </div>
        <div>{renderFeatures()}</div>
      </Container>
    </a.section>
  );
};

const query = graphql`
  {
    product: file(name: { eq: "computer" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 380) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Product;
