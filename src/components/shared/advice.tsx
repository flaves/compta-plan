import React from 'react';
import { css, useTheme } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Button from './button';
import useParallax from '../../hooks/useParallax';

const Advice: React.FC = () => {
  const { background } = useStaticQuery(query);
  const { color, fontWeight } = useTheme();
  const [ref, value] = useParallax();

  return (
    <section
      css={css`
        height: 800px;
        overflow: hidden;
        position: relative;
      `}
      ref={ref}
    >
      <div
        style={{
          transform: `translate3d(0, -${value}px, 0)`,
        }}
      >
        <GatsbyImage image={background.childImageSharp.gatsbyImageData} />
      </div>
      <div
        css={css`
          background-color: hsla(0, 0%, 0%, 0.5);
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
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
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        `}
      >
        <div>
          <h2
            css={css`
              color: ${color.white};
              font-size: 60px;
              font-weight: ${fontWeight.bold};
              margin-bottom: 50px;
            `}
          >
            Besoin de conseils
            <br />
            fiscaux ?
          </h2>
          <Button variant="white" size="lg">
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
};

const query = graphql`
  {
    background: file(name: { eq: "advice" }) {
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: ATTENTION }
          layout: FULL_WIDTH
        )
      }
    }
  }
`;

export default Advice;
