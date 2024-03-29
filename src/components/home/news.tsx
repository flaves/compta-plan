import React from 'react';
import { css } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';

import Carousel from '../shared/carousel';

import Container from '../shared/styled/container';

import ArticleType from '../../types/article';

const News: React.FC = () => {
  const { allContentfulArticles } = useStaticQuery(query);

  const articles: ArticleType[] = allContentfulArticles?.edges?.map(
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
          items={articles}
          title="Les dernières actualités."
          desc="Découvrez les dernières nouveautés en matière de comptabilité, fiscalité, droit, etc."
          to="blog"
          prefix="blog"
        />
      </Container>
    </section>
  );
};

const query = graphql`
  {
    allContentfulArticles {
      edges {
        node {
          id
          name
          slug
          updatedAt
          cover {
            gatsbyImageData(
                aspectRatio: 0.8
                quality: 5
                cropFocus: CENTER
                resizingBehavior: FILL
                placeholder: BLURRED
              )
          }
          category {
            id
            name
          }
        }
      }
    }
  }
`;

export default News;
