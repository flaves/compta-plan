import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Button from '../shared/button';
import mq from '../../styles/mq';

import { ThemeType } from '../../styles/theme';

const Hero: React.FC = () => {
  const { file } = useStaticQuery(query);
  const { color, fontWeight } = useTheme<ThemeType>();

  return (
    <section
      css={css`
        margin-bottom: 150px;
        padding: 0 20px;

        ${mq(`md`)} {
          overflow: hidden;
          display: flex;
          max-height: 80vh;
          padding: 0;
        }
      `}
    >
      <div
        css={css`
          position: relative;
          z-index: 2;
          text-align: center;

          ${mq(`md`)} {
            text-align: initial;
            flex: 0 0 40%;
            max-width: 40%;
          }
        `}
      >
        <h1
          css={css`
            color: ${color.heading};
            font-size: 30px;
            margin-bottom: 20px;

            ${mq(`md`)} {
              margin-bottom: 0;
              font-size: 90px;
              position: absolute;
              top: 100px;
              left: 100px;
              width: 1100px;
            }
          `}
        >
          La fiduciaire qui coach
          <br /> votre entreprise
        </h1>
        <div
          css={css`
            ${mq(`md`)} {
              padding-top: 380px;
              padding-left: 100px;
              padding-right: 50px;
            }
          `}
        >
          <p
            css={css`
              font-size: 16px;
              font-weight: ${fontWeight.medium};
              color: #a9a9a9;
              margin-bottom: 50px;

              ${mq(`md`)} {
                margin-bottom: 150px;
              }
            `}
          >
            Maecenas rhoncus fringilla vestibulum. Nunc placerat ligula et
            mauris mollis, nec aliquam elit ultrices.
          </p>
          <Button>Choisir Compta Plan</Button>
        </div>
      </div>
      <div
        css={css`
          flex: 0 0 60%;
          max-width: 60%;
        `}
      >
        <Img fluid={file.childImageSharp.fluid} />
      </div>
    </section>
  );
};

const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Hero;
