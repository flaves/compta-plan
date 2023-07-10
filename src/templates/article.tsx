import React from 'react';
import { css } from '@emotion/react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { withArtDirection } from 'gatsby-plugin-image';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/layout';
import ArticleImage from '../components/blog/image';
import mq from '../styles/mq';
import Container from '../components/shared/styled/container';
import Hero from '../components/shared/hero';
import Contact from '../components/shared/contact';
import H1 from '../components/shared/styled/h1';
import SubTitle from '../components/shared/styled/sub-title';
import ArticleType from '../types/article';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { fileName } = node.data.target.fields.file[`fr-BE`];
      return <ArticleImage fileName={fileName} />;
    },
    [INLINES.HYPERLINK]: (node: any) => (
      <a target="_blank" rel="noopener noreferrer" href={node.data.uri}>
        {node.content[0].value}
      </a>
    ),
  },
};

type ArticleData = {
  article: ArticleType;
  mobileHero: any;
  desktopHero: any;
};

type ArticleProps = PageProps<ArticleData>;

function ArticlePage(props: ArticleProps) {
  const { data } = props;
  const { article, mobileHero, desktopHero } = data;
  const sources = withArtDirection(mobileHero?.gatsbyImageData, [
    {
      image: desktopHero?.gatsbyImageData,
      media: `(min-width: 768px)`,
    },
  ]);
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
          <div>
            <H1
              css={css`
                ${mq(`md`)} {
                  font-size: 30px;
                  max-width: 800px;
                }
              `}
            >
              {article?.name}
            </H1>
            <SubTitle>{article?.description}</SubTitle>
          </div>
        </div>
      </Hero>
      <section
        css={css`
          max-width: 1200px;
          margin: auto;
          word-break: break-word;
          text-align: justify;

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 1rem;
          }

          h1 {
            font-size: 30px;
          }

          h2 {
            font-size: 24px;
          }

          h3 {
            font-size: 20px;
          }

          h4,
          h5,
          h6,
          p {
            font-size: 16px;
          }

          ul,
          li {
            list-style: initial;
          }

          ul {
            padding-left: 40px !important;
          }
        `}
      >
        <Container>{renderRichText(article?.content, options)}</Container>
      </section>
      <Contact />
    </Layout>
  );
}

export function Head(props: HeadProps<ArticleData>) {
  const { data } = props;
  const ogImage = data.desktopHero.gatsbyImageData.images.fallback.src;
  return (
    <>
      <title>{data.article.name}</title>
      <meta name="description" content={data.article.description} />
      <meta property="og:image" content={ogImage} />
    </>
  );
}

export const query = graphql`
  query ($id: String!, $cover: String!) {
    article: contentfulArticles(id: { eq: $id }) {
      id
      name
      description
      content {
        raw
      }
    }
    mobileHero: contentfulAsset(id: { eq: $cover }) {
      gatsbyImageData(
        width: 768
        height: 1000
        quality: 60
        resizingBehavior: FILL
      )
    }
    desktopHero: contentfulAsset(id: { eq: $cover }) {
      gatsbyImageData(
        width: 1440
        height: 800
        quality: 60
        cropFocus: TOP
        resizingBehavior: FILL
      )
    }
  }
`;

export default ArticlePage;
