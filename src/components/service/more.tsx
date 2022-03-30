import React from 'react';
import { css } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';

import Carousel from '../shared/carousel';

import Container from '../shared/styled/container';

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
      `}
    >
      <Container>
        <Carousel
          items={services}
          title="Découvrez aussi"
          desc="Compta Plan vous propose une large gamme de service."
          to="/"
          prefix="nos-services"
        />
      </Container>
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
