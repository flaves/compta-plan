import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/shared/hero';
import Button from '../components/shared/button';

import mq from '../styles/mq';

import H1 from '../components/shared/heading/h1';
import Intro from '../components/primes/intro';
import Content from '../components/primes/content';
import MeetUp from '../components/shared/meet-up';

const PrimesSubsides: React.FC = () => {
  const { hero } = useStaticQuery(query);

  return (
    <Layout>
      <Hero background={hero.childImageSharp.fluid}>
        <H1
          css={css`
            margin-bottom: 10px;
          `}
        >
          Primes & Subsides
        </H1>
        <p
          css={css`
            color: #b6b6b6;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 60px;

            ${mq(`md`)} {
              font-size: 20px;
            }
          `}
        >
          Vous êtes un porteur de projet, une starter, une PME,
          <br /> un indépendant, un indépendant à titre complémentaire ?
        </p>
        <Button size="lg">Vérifier mon éligibilité</Button>
      </Hero>
      <Intro />
      <Content />
      <MeetUp />
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

export default PrimesSubsides;
