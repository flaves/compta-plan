import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Button from './button';

import useParallax from '../../hooks/useParallax';
import Container from './styled/container';
import Link from './link';

const Contact: React.FC = () => {
  const [ref, value] = useParallax();
  const { hero } = useStaticQuery(query);

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
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
        style={{
          transform: `translate3d(0, -${value}px, 0)`,
        }}
      >
        <Img fluid={hero.childImageSharp.fluid} />
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
            align-items: center;
            height: 100%;
            padding-left: 100px;
          `}
        >
          <div>
            <h3
              css={css`
                color: white;
                font-size: 60px;
                font-weight: bold;
                margin-bottom: 50px;
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
    hero: file(relativeDirectory: { eq: "shared" }, name: { eq: "contact" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 1000, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Contact;
