import React from 'react';
import { css, useTheme } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import useParallax from '../../hooks/useParallax';
import Link from './link';
import mq from '../../styles/mq';

const Contact: React.FC = () => {
  const [ref, value] = useParallax();
  const { mobileHero, desktopHero } = useStaticQuery(query);
  const { color } = useTheme();

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
        position: relative;
        height: 700px;
        overflow: hidden;
      `}
      ref={ref}
    >
      <div
        css={css`
          height: 120%;
        `}
        style={{
          transform: `translate3d(0, -${value}px, 0)`,
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
      <div
        css={css`
          background-color: hsla(0, 0%, 0%, 0.5);
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            padding: 50px;

            ${mq(`md`)} {
              justify-content: initial;
              padding-left: 100px;
            }
          `}
        >
          <div
            css={css`
              text-align: center;

              ${mq(`md`)} {
                text-align: left;
              }
            `}
          >
            <h3
              css={css`
                color: ${color.white};
                font-size: 30px;
                margin-bottom: 50px;

                ${mq(`md`)} {
                  font-size: 60px;
                }
              `}
            >
              Un coaching ou
              <br />
              un conseil fiscal ?
            </h3>
            <Link to="/contact">Contactez-nous</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const query = graphql`
  {
    mobileHero: file(
      relativeDirectory: { eq: "shared" }
      name: { eq: "contact" }
    ) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 700, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopHero: file(
      relativeDirectory: { eq: "shared" }
      name: { eq: "contact" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 700, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default React.memo(Contact);
