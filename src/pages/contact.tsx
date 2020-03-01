import React, { useState } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/shared/hero';
import Tabs from '../components/contact/tabs';
import Address from '../components/contact/address';
import Email from '../components/contact/email';

import { ThemeType } from '../styles/theme';

const Contact: React.FC = () => {
  const [current, setCurrent] = useState<string>(
    `3522bae8-dc6e-5ff4-be6a-c4ea6212287e`
  );
  const { hero } = useStaticQuery(query);
  const { color, fontWeight } = useTheme<ThemeType>();

  return (
    <Layout>
      <Hero background={hero.childImageSharp.fluid}>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            text-align: center;
          `}
        >
          <h1
            css={css`
              color: ${color.white};
              font-size: 60px;
              font-weight: ${fontWeight.bold};
            `}
          >
            Contactez-nous
          </h1>
        </div>
      </Hero>
      <Tabs current={current} setCurrent={setCurrent} />
      <Address current={current} />
      <Email />
    </Layout>
  );
};

const query = graphql`
  {
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "contact" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 800, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Contact;
