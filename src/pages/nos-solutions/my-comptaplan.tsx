import React from 'react';
import { css } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { withArtDirection } from 'gatsby-plugin-image';

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

  const sources = withArtDirection(mobileHero?.childImageSharp?.gatsbyImageData,
    [{
      image: desktopHero?.childImageSharp?.gatsbyImageData,
      media: `(min-width: 768px)`,
    }]
  )

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
            width: 100%;
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

const query = graphql`{
  mobileHero: file(name: {eq: "hero"}, relativeDirectory: {eq: "solutions"}) {
    childImageSharp {
      gatsbyImageData(width: 768, height: 800, layout: CONSTRAINED)
    }
  }
  desktopHero: file(name: {eq: "hero"}, relativeDirectory: {eq: "solutions"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`;

export default MyComptaplan;
