import React from 'react';
import { css } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';

import Carousel from '../shared/carousel';

import OfferType from '../../types/offer';
import Container from '../shared/styled/container';

const More: React.FC = () => {
  const { allContentfulOffer } = useStaticQuery(query);

  const offers: OfferType[] = allContentfulOffer?.edges?.map(
    (item: { node: OfferType }) => item?.node
  );

  return (
    <section
      css={css`
        overflow: hidden;
      `}
    >
      <Container>
        <Carousel
          items={offers}
          title="Découvrez aussi"
          desc="Compta Plan vous propose une gamme d'offre complète."
          to="/"
          prefix="nos-offres"
        />
      </Container>
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
            gatsbyImageData(
                aspectRatio: 0.8
                quality: 10
                cropFocus: CENTER
                resizingBehavior: FILL
              )
          }
        }
      }
    }
  }
`;

export default More;
