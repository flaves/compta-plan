import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Link from './link';

import mq from '../../styles/mq';
import useParallax from '../../hooks/useParallax';

import { ThemeType } from '../../styles/theme';

const MeetUp: React.FC = () => {
  const [ref, parallax] = useParallax();
  const { mobileHero, desktopHero } = useStaticQuery(query);
  const { color, fontWeight } = useTheme<ThemeType>();

  const sources = [
    mobileHero.childImageSharp.fluid,
    {
      ...desktopHero.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <section
      css={css`
        background-color: ${color.black};
        display: flex;
        flex-direction: column;

        ${mq(`md`)} {
          flex-direction: initial;
        }
      `}
      ref={ref}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          padding: 50px;
          order: 2;

          ${mq(`md`)} {
            flex: 0 0 60%;
            max-width: 60%;
            padding: 0 20px 0 100px;
            order: initial;
          }
        `}
      >
        <div>
          <h3
            css={css`
              color: ${color.white};
              font-weight: ${fontWeight.bold};
              margin-bottom: 15px;

              ${mq(`md`)} {
                font-size: 24px;
              }

              ${mq(`lg`)} {
                font-size: 36px;
              }

              ${mq(`xl`)} {
                font-size: 48px;
              }
            `}
          >
            Rencontrons-nous
            <br />
            pour en parler
          </h3>
          <p
            css={css`
              color: #a9a9a9;
              font-size: 14px;
              font-weight: ${fontWeight.regular};
              margin-bottom: 30px;

              ${mq(`lg`)} {
                font-size: 16px;
                margin-bottom: 50px;
                max-width: 560px;
              }
            `}
          >
            Nous vous proposons un premier contact afin d’établir un audit de
            votre entreprise et identifier ensemble les solutions et outils
            adaptés.{' '}
          </p>
          <Link to="/contact" size="lg">
            Prendre rendez-vous
          </Link>
        </div>
      </div>
      <div
        css={css`
          overflow: hidden;
          max-height: 400px;

          ${mq(`md`)} {
            flex: 0 0 40%;
            max-height: 450px;
          }
        `}
      >
        <div
          css={css`
            height: 500px;

            ${mq(`md`)} {
              height: 700px;
            }
          `}
          style={{
            transform: `translate3d(0, -${parallax / 2}px, 0)`,
          }}
        >
          <Img
            fluid={sources}
            css={css`
              position: initial !important;
              max-width: 768px;
              margin: 0 auto;

              ${mq(`md`)} {
                max-width: initial;
                margin: initial;
              }
            `}
          />
        </div>
      </div>
    </section>
  );
};

const query = graphql`
  {
    mobileHero: file(
      name: { eq: "meet-up" }
      relativeDirectory: { eq: "shared" }
    ) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 800, cropFocus: WEST) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopHero: file(
      name: { eq: "meet-up" }
      relativeDirectory: { eq: "shared" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 800, cropFocus: WEST) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default React.memo(MeetUp);
