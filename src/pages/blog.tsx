import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { withArtDirection } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Hero from '../components/shared/hero';
import H1 from '../components/shared/styled/h1';
import H2 from '../components/shared/styled/h2';
import Contact from '../components/shared/contact';
import Featured from '../components/blog/featured';
import PaginatedArticles from '../components/blog/paginatedArticles';
import CategoryType from '../types/category';
import mq from '../styles/mq';
import ArticleType from '../types/article';
import { ContentfulPage } from '../types/contentful';

const Container = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 0 16px;

  ${mq('sm')} {
    max-width: 1280px;
    padding: 0 24px;
  }
`;

type BlogPageData = {
  contentfulPage: ContentfulPage;
  mobileHero: any;
  desktopHero: any;
  allContentfulCategories: any;
  allContentfulArticles: any;
};

type BlogPageProps = PageProps<BlogPageData>;

function BlogPage(props: BlogPageProps) {
  const { data } = props;
  const {
    mobileHero,
    desktopHero,
    allContentfulCategories,
    allContentfulArticles,
  } = data;

  const categories: CategoryType[] = allContentfulCategories?.edges?.map(
    (item: { node: CategoryType }) => item?.node
  );

  const articles: ArticleType[] = allContentfulArticles?.edges?.map(
    (item: { node: ArticleType }) => item?.node
  );

  const sources = withArtDirection(
    mobileHero?.childImageSharp?.gatsbyImageData,
    [
      {
        image: desktopHero?.childImageSharp?.gatsbyImageData,
        media: `(min-width: 768px)`,
      },
    ]
  );

  const renderArticles = useCallback(
    () => (
      <section>
        <Container>
          <H2>Articles</H2>
        </Container>
        <PaginatedArticles categories={categories} articles={articles} />
      </section>
    ),
    [articles]
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
      {renderArticles()}
      <Contact />
    </Layout>
  );
}

export function Head(props: HeadProps<BlogPageData>) {
  const { data } = props;
  return (
    <>
      <title>{data.contentfulPage.seo_title}</title>
      <meta name="description" content={data.contentfulPage.seo_description} />
    </>
  );
}

export const query = graphql`
  {
    contentfulPage(slug: { eq: "blog" }) {
      id
      seo_title
      seo_description
    }
    mobileHero: file(name: { eq: "hero" }, relativeDirectory: { eq: "blog" }) {
      childImageSharp {
        gatsbyImageData(
          width: 768
          height: 600
          transformOptions: { cropFocus: ATTENTION }
          layout: CONSTRAINED
        )
      }
    }
    desktopHero: file(name: { eq: "hero" }, relativeDirectory: { eq: "blog" }) {
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: ATTENTION }
          layout: FULL_WIDTH
        )
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
    allContentfulArticles {
      edges {
        node {
          id
          name
          slug
          cover {
            gatsbyImageData(
              aspectRatio: 0.8
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

export default BlogPage;
