import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { withArtDirection } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Hero from '../components/shared/hero';

import H1 from '../components/shared/styled/h1';
import SEO from '../components/helpers/seo';
import Contact from '../components/shared/contact';
import Featured from '../components/blog/featured';
import Carousel from '../components/shared/carousel';

import CategoryType from '../types/category';
import mq from '../styles/mq';

const Container = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 0 16px;
  ${mq('sm')} {
    max-width: 1280px;
    padding: 0 24px;
  }
`;

const Blog: React.FC = () => {
  const { mobileHero, desktopHero, allContentfulCategories } = useStaticQuery(
    query
  );

  const categories: CategoryType[] = allContentfulCategories?.edges?.map(
    (item: { node: CategoryType }) => item?.node
  );

  const sources = withArtDirection(mobileHero?.childImageSharp?.gatsbyImageData,
    [{
      image: desktopHero?.childImageSharp?.gatsbyImageData,
      media: `(min-width: 768px)`,
    }]
  )

  const renderCategories = useCallback(
    () => (
      <section
        css={css`
          overflow: hidden;
        `}
      >
        <Container>
          <div
            css={css`
              padding: 40px 0;

              ${mq(`md`)} {
                padding: 70px 0;
              }
            `}
          >
            {categories?.map((category) => (
              <div key={category?.id}>
                <Carousel
                  items={category?.articles}
                  title={category?.name}
                  desc="Découvrez les dernères actualités comptables."
                  to="blog"
                  prefix="blog"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    ),
    [categories]
  );

  return (
    <Layout>
      <SEO title="Blog" description="Nos derniers articles." />
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
          <H1
            css={css`
              max-width: 500px;
            `}
          >
            Les dernières actualités
          </H1>
        </div>
      </Hero>
      <Featured />
      {renderCategories()}
      <Contact />
    </Layout>
  );
};

const query = graphql`{
  mobileHero: file(name: {eq: "hero"}, relativeDirectory: {eq: "blog"}) {
    childImageSharp {
      gatsbyImageData(
        width: 768
        height: 600
        transformOptions: {cropFocus: ATTENTION}
        layout: CONSTRAINED
      )
    }
  }
  desktopHero: file(name: {eq: "hero"}, relativeDirectory: {eq: "blog"}) {
    childImageSharp {
      gatsbyImageData(transformOptions: {cropFocus: ATTENTION}, layout: FULL_WIDTH)
    }
  }
  allContentfulCategories {
    edges {
      node {
        id
        name
        articles {
          id
          name
          slug
          cover {
            gatsbyImageData(
                aspectRatio: 0.8
                quality: 90
                cropFocus: CENTER
                resizingBehavior: FILL
              )
          }
        }
      }
    }
  }
}
`;

export default Blog;
