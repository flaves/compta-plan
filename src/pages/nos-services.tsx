import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/shared/hero';

import H1 from '../components/shared/heading/h1';

import Button from '../components/shared/button';
import MeetUp from '../components/shared/meet-up';
import Intro from '../components/shared/intro';
import Services from '../components/shared/services';

import { ThemeType } from '../styles/theme';
import Advice from '../components/shared/advice';

const services: string[] = [
  `Controle fiscal`,
  `Assistance control fiscal`,
  `Maitrise des couts`,
  `Optimisation fiscale`,
  `Droits d’auteurs`,
  `Rémunération optimisée`,
];

const NosServices: React.FC = () => {
  const { hero } = useStaticQuery(query);
  const { color, fontWeight } = useTheme<ThemeType>();

  return (
    <Layout>
      <Hero background={hero.childImageSharp.fluid}>
        <H1
          css={css`
            margin-bottom: 10px;
          `}
        >
          Conseil fiscal
        </H1>
        <p
          css={css`
            color: #bcbcbc;
            font-size: 16px;
            font-weight: ${fontWeight.medium};
            max-width: 1000px;
            margin-bottom: 60px;
          `}
        >
          La fiscalité est un vaste domaine aux multiples facettes.
          Déductibilité, amortissements, rémunération optimisée, optimisation…
          Difficile d’y voir claire tant les différentes possibilités demandent
          de la maîtrise et varient selon l’actualité.
        </p>
        <Button size="lg">Rencontrons-nous</Button>
      </Hero>
      <Intro
        title="Nos services"
        subTitle="Notre pro-activité et notre veille analytique quotidienne, nous informe des dernières tendance et permet de
systématiquement réajuster nos pratique afin de vous fournir les meilleurs conseils en terme de fiscalité."
      />
      <Services title="Les services inclus" services={services} />
      <MeetUp />
      <Advice />
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

export default NosServices;
