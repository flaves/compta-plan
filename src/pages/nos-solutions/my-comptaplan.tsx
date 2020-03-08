import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import Hero from '../../components/shared/hero';

import H1 from '../../components/shared/styled/h1';
import SubTitle from '../../components/shared/styled/sub-title';
import MeetUp from '../../components/shared/meet-up';
import Contact from '../../components/shared/contact';
import Product from '../../components/home/product';
import Link from '../../components/shared/link';

const MyComptaplan: React.FC = () => {
  const { hero } = useStaticQuery(query);

  return (
    <Layout>
      <Hero background={hero.childImageSharp.fluid} defaultHeight="800px">
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            text-align: center;
          `}
        >
          <div>
            <H1>My Compta Plan</H1>
            <SubTitle>
              Si vous êtes client chez Compta Plan, vous bénéficiez gratuitement
              d’un accès illimités à nos outils digitaux.
            </SubTitle>
            <Link to="/">Demander une démo</Link>
          </div>
        </div>
      </Hero>
      <Product />
      <MeetUp />
      <Contact />
    </Layout>
  );
};

const query = graphql`
  {
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "solutions" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default MyComptaplan;
