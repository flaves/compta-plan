import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/shared/hero';

import H1 from '../components/shared/styled/h1';
import Contact from '../components/shared/contact';
import Featured from '../components/blog/featured';
import Carousel from '../components/shared/carousel';

import CategoryType from '../types/category';
import Container from '../components/shared/styled/container';

const Blog: React.FC = () => {
  const { mobileHero, desktopHero, allContentfulCategories } = useStaticQuery(
    query
  );

  const categories: CategoryType[] = allContentfulCategories?.edges?.map(
    (item: { node: CategoryType }) => item?.node
  );

  const sources = [
    mobileHero.childImageSharp.fluid,
    {
      ...desktopHero.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  const renderCategories = useCallback(
    () => (
      <section
        css={css`
          overflow: hidden;
        `}
      >
        <Container>
          {categories?.map(category => (
            <div>
              <Carousel
                items={category?.articles}
                title={category?.name}
                desc="Aliquam dictum, libero non malesuada vehicula, augue est
tempor urna, sit amet accumsan nisl eros nec erat."
                to="blog"
                prefix="blog"
              />
            </div>
          ))}
        </Container>
      </section>
    ),
    []
  );

  return (
    <Layout>
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

const query = graphql`
  {
    mobileHero: file(name: { eq: "hero" }, relativeDirectory: { eq: "blog" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 600, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopHero: file(name: { eq: "hero" }, relativeDirectory: { eq: "blog" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 800, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulCategories {
      edges {
        node {
          name
          articles {
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
  }
`;

export default Blog;