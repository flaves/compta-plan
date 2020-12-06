import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from '@material-ui/core/Container';

import Layout from '../components/layout';
import Hero from '../components/shared/hero';

import H1 from '../components/shared/styled/h1';
import SEO from '../components/helpers/seo';
import Contact from '../components/shared/contact';
import Featured from '../components/blog/featured';
import Carousel from '../components/shared/carousel';

import CategoryType from '../types/category';
import mq from '../styles/mq';

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
          id
          name
          articles {
            id
            name
            slug
            cover {
              fluid(
                maxWidth: 240
                maxHeight: 300
                quality: 90
                toFormat: JPG
                cropFocus: CENTER
                resizingBehavior: FILL
              ) {
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
