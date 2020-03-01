import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/shared/hero';
import Intro from '../components/primes/intro';
import Content from '../components/primes/content';
import MeetUp from '../components/shared/meet-up';
import Link from '../components/shared/link';

import mq from '../styles/mq';

import H1 from '../components/shared/styled/h1';

import { ThemeType } from '../styles/theme';
import Contact from '../components/shared/contact';
import SubTitle from '../components/shared/styled/sub-title';

const PrimesSubsides: React.FC = () => {
  const { hero } = useStaticQuery(query);
  const { fontWeight } = useTheme<ThemeType>();

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
          <div>
            <H1
              css={css`
                margin-bottom: 10px;
              `}
            >
              Primes & Subsides
            </H1>
            <SubTitle>
              Vous êtes un porteur de projet, une starter, une PME,
              <br /> un indépendant, un indépendant à titre complémentaire ?
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
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "bonus" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default PrimesSubsides;
