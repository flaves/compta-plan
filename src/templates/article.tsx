import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import Layout from '../components/layout';
import ArticleImage from '../components/blog/image';

import mq from '../styles/mq';

import Container from '../components/shared/styled/container';
import Hero from '../components/shared/hero';
import H1 from '../components/shared/styled/h1';
import SubTitle from '../components/shared/styled/sub-title';

import ArticleType from '../types/article';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      console.log(node);
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

interface ArticleProps {
  data: {
    contentfulArticles: ArticleType;
    mobileHero: any;
    desktopHero: any;
  };
}

const Article: React.FC<ArticleProps> = ({
  data: { contentfulArticles: article, mobileHero, desktopHero },
}) => {
  const sources = [
    mobileHero.fluid,
    {
      ...desktopHero.fluid,
      media: `(min-width: 768px)`,
    },
  ];

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
        `}
      >
        <Container>
          {documentToReactComponents(article?.content?.json, options)}
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!, $cover: String!) {
    contentfulArticles(id: { eq: $id }) {
      id
      name
      description
      content {
        json
      }
    }
    mobileHero: contentfulAsset(id: { eq: $cover }) {
      fluid(
        maxWidth: 384
        maxHeight: 500
        quality: 70
        cropFocus: LEFT
        toFormat: JPG
      ) {
        ...GatsbyContentfulFluid
      }
    }
    desktopHero: contentfulAsset(id: { eq: $cover }) {
      fluid(maxWidth: 720, maxHeight: 400, quality: 70, toFormat: JPG) {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

export default Article;
