import React from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

import Carousel from '../shared/carousel';

import ArticleType from '../../types/article';

const More: React.FC = () => {
  const { allContentfulService } = useStaticQuery(query);

  const services: ArticleType[] = allContentfulService?.edges?.map(
    (item: { node: ArticleType }) => item?.node
  );

  return (
    <section
      css={css`
        overflow: hidden;
        padding: 100px;
      `}
    >
      <Carousel
        items={services}
        title="Découvrez aussi"
        desc="Compta Plan vous propose une large gamme de service."
        to="/"
        prefix="nos-services"
      />
    </section>
  );
};

const query = graphql`
  {
    allContentfulService {
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
