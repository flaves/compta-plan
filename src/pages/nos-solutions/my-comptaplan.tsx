import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/helpers/seo';
import Hero from '../../components/shared/hero';

import H1 from '../../components/shared/styled/h1';
import SubTitle from '../../components/shared/styled/sub-title';
import MeetUp from '../../components/shared/meet-up';
import Contact from '../../components/shared/contact';
import Product from '../../components/home/product';
import Link from '../../components/shared/link';

import Video from '../../videos/dashboard.mp4';

const MyComptaplan: React.FC = () => {
  const { mobileHero, desktopHero } = useStaticQuery(query);

  const sources = [
    mobileHero.childImageSharp.fluid,
    {
      ...desktopHero.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Layout>
      <SEO title="My Compta Plan" description="Votre outil de gestion." />
      <Hero background={sources} defaultHeight="800px">
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
      <section
        css={css`
          max-width: 800px;
          margin: 0 auto 100px auto;
        `}
      >
        <video
          controls
          muted
          autoPlay
          css={css`
            max-width: 800px;
          `}
        >
          <source src={Video} type="video/mp4" />
        </video>
      </section>
      <MeetUp />
      <Contact />
    </Layout>
  );
};

const query = graphql`
  {
    mobileHero: file(
      name: { eq: "hero" }
      relativeDirectory: { eq: "solutions" }
    ) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopHero: file(
      name: { eq: "hero" }
      relativeDirectory: { eq: "solutions" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default MyComptaplan;
