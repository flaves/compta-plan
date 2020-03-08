import React from 'react';
import { css } from '@emotion/core';
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
          title="Les dernières
actualités."
          desc="Aliquam dictum, libero non malesuada vehicula, augue est
tempor urna, sit amet accumsan nisl eros nec erat."
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
          cover {
            fluid(maxWidth: 140, maxHeight: 175) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default News;
