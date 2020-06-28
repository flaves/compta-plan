import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

import H1 from '../components/shared/styled/h1';
import Hero from '../components/shared/hero';

import Layout from '../components/layout';
import SEO from '../components/helpers/seo';
import Link from '../components/shared/link';
import Intro from '../components/shared/intro';
import Services from '../components/service/services';
import MeetUp from '../components/shared/meet-up';
import Contact from '../components/shared/contact';
import More from '../components/offer/more';

import SubTitle from '../components/shared/styled/sub-title';

import OfferType from '../types/offer';

interface ServicesProps {
  data: {
    offer: OfferType;
    mobileHero: any;
    desktopHero: any;
  };
}

const Offer: React.FC<ServicesProps> = ({
  data: { offer, mobileHero, desktopHero },
}) => {
  const content = offer?.content?.json;

  const sources = [
    mobileHero.fluid,
    {
      ...desktopHero.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Layout>
      <SEO title={offer.name} description={offer.description} />
      <section>
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
              <H1>{offer?.name}</H1>
              <SubTitle>{offer?.description}</SubTitle>
              <Link to="/contact" size="lg">
                Rencontrons-nous
              </Link>
            </div>
          </div>
        </Hero>
        <Intro title="Nos offres" content={content} />
        <Services title="Les services inclus" services={offer?.services} />
        <MeetUp />
        <More />
        <Contact />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!, $cover: String!) {
    offer: contentfulOffer(id: { eq: $id }) {
      id
      name
      description
      content {
        json
      }
      services
    }
    mobileHero: contentfulAsset(id: { eq: $cover }) {
      fluid(
        maxWidth: 768
        maxHeight: 1000
        quality: 60
        toFormat: JPG
        resizingBehavior: FILL
      ) {
        ...GatsbyContentfulFluid
      }
    }
    desktopHero: contentfulAsset(id: { eq: $cover }) {
      fluid(
        maxWidth: 1440
        maxHeight: 800
        quality: 60
        toFormat: JPG
        cropFocus: TOP
        resizingBehavior: FILL
      ) {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

export default React.memo(Offer);
