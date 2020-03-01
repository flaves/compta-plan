import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

import Carousel from '../shared/carousel';

import OfferType from '../../types/offer';

const More: React.FC = () => {
  const { allContentfulOffer } = useStaticQuery(query);

  const offers: OfferType[] = allContentfulOffer?.edges?.map(
    (item: { node: OfferType }) => item?.node
  );

  return (
    <section
      css={css`
        overflow: hidden;
        padding: 100px;
      `}
    >
      <Carousel
        items={offers}
        title="Découvrez aussi"
        desc="Compta Plan vous propose une gamme d'offre complète."
        to="/"
        prefix="nos-offres"
      />
    </section>
  );
};

const query = graphql`
  {
    allContentfulOffer {
      edges {
        node {
          id
          name
          slug
          cover {
            fluid(maxWidth: 280, maxHeight: 350) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default More;
