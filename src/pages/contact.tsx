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
  const [current, setCurrent] = useState<string>(`bw`);
  const { hero } = useStaticQuery(query);
  const { color, fontWeight } = useTheme<ThemeType>();

  return (
    <Layout>
      <Hero background={hero.childImageSharp.fluid}>
        <h1
          css={css`
            color: ${color.white};
            font-size: 60px;
            font-weight: ${fontWeight.bold};
          `}
        >
          Contactez-nous
        </h1>
      </Hero>
      <Tabs current={current} setCurrent={setCurrent} />
      <Address current={current} />
      <Email />
    </Layout>
  );
};

const query = graphql`
  {
    hero: file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(
          maxWidth: 1920
          maxHeight: 1200
          cropFocus: ATTENTION
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Contact;
