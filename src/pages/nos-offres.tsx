import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/shared/hero';
import Button from '../components/shared/button';
import Intro from '../components/shared/intro';
import Services from '../components/shared/services';
import MeetUp from '../components/shared/meet-up';
import Advice from '../components/shared/advice';

import H1 from '../components/shared/styled/h1';

import { ThemeType } from '../styles/theme';

const services: string[] = [
  `Premier rendez-vous`,
  `Déclaration fiscale`,
  `Admin Plan`,
  `Gestion de votre compta`,
  `Bilan annuel`,
  `Fichiers CODA - SODA`,
  `Conseil quotidien`,
  `Déclaration TVA`,
  `Prise en charge de votre UBO`,
  `Conseil fiscal`,
  `Radar de votre entreprise`,
];

const NosOffres: React.FC = () => {
  const { hero } = useStaticQuery(query);
  const { fontWeight } = useTheme<ThemeType>();

  return (
    <Layout>
      <Hero background={hero.childImageSharp.fluid}>
        <H1>Offre PME</H1>
        <p
          css={css`
            color: #bcbcbc;
            font-size: 16px;
            font-weight: ${fontWeight.medium};
            max-width: 800px;
            margin-bottom: 60px;
          `}
        >
          Vous êtes une PME et souhaitez bénéficier de toutes les compétences
          requises en terme de comptabilité ? Comptaplan vous apporte une
          solution globale optimisée selon vos besoins.
        </p>
        <Button size="lg">Rencontrons-nous</Button>
      </Hero>
      <Intro
        title="Nos offres"
        subTitle="De base, nos solutions PME comprennent le conseil à l’optimisation fiscale, la gestion mensuelle et trimestrielle de votre
comptabilité, le bilan annuel, etc. Ainsi que la mise à disposition d’outils digitaux indispensables à une gestion quotidienne."
      />
      <Services title="Ce service comprend" services={services} />
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

export default NosOffres;
