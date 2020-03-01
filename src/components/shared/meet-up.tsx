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
  const { hero } = useStaticQuery(query);
  const { color, fontWeight } = useTheme<ThemeType>();

  return (
    <section
      css={css`
        background-color: ${color.black};

        ${mq(`md`)} {
          display: flex;
        }
      `}
      ref={ref}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          padding: 50px;

          ${mq(`md`)} {
            flex: 0 0 60%;
            max-width: 60%;
            padding: 0 20px 0 100px;
          }
        `}
      >
        <div>
          <h3
            css={css`
              color: ${color.white};
              font-size: 24px;
              font-weight: ${fontWeight.bold};
              margin-bottom: 15px;

              ${mq(`lg`)} {
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
          max-height: 500px;

          ${mq(`md`)} {
            flex: 0 0 40%;
          }
        `}
      >
        <div
          style={{
            transform: `translate3d(0, -${parallax / 2}px, 0)`,
          }}
        >
          <Img fluid={hero.childImageSharp.fluid} />
        </div>
      </div>
    </section>
  );
};

const query = graphql`
  {
    hero: file(name: { eq: "meet-up" }, relativeDirectory: { eq: "shared" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 800, cropFocus: WEST) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default MeetUp;
