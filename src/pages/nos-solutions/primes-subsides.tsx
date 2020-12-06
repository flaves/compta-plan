import React from 'react';
import { css } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/helpers/seo';
import Hero from '../../components/shared/hero';
import Intro from '../../components/primes/intro';
import Content from '../../components/primes/content';
import MeetUp from '../../components/shared/meet-up';
import Link from '../../components/shared/link';

import mq from '../../styles/mq';

import H1 from '../../components/shared/styled/h1';

import Contact from '../../components/shared/contact';
import SubTitle from '../../components/shared/styled/sub-title';

const PrimesSubsides: React.FC = () => {
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
      <SEO title="Primes & Subsides" description="Primes & Subsides" />
      <Hero background={sources}>
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
            <H1
              css={css`
                margin-bottom: 10px;
              `}
            >
              Primes & Subsides
            </H1>
            <SubTitle
              css={css`
                ${mq(`sm`)} {
                  max-width: 450px;
                }
              `}
            >
              Vous êtes un porteur de projet, une starter, une PME, un
              indépendant, un indépendant à titre complémentaire ?
            </SubTitle>
            <Link size="lg" to="/contact">
              Vérifier mon éligibilité
            </Link>
          </div>
        </div>
      </Hero>
      <Intro />
      <Content />
      <MeetUp />
      <Contact />
    </Layout>
  );
};

const query = graphql`
  {
    mobileHero: file(name: { eq: "hero" }, relativeDirectory: { eq: "bonus" }) {
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopHero: file(
      name: { eq: "hero" }
      relativeDirectory: { eq: "bonus" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default PrimesSubsides;
