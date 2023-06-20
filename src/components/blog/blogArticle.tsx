import React from 'react';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-link';

import Button from '../shared/button';

import mq from '../../styles/mq';

import ArticleType from '../../types/article';

interface BlogArticlesProps {
  article: ArticleType;
  cleanParams: () => void;
}

const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 43%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px 20px 10px 20px;
  overflow: hidden;
`;

const Title = styled.h2`
  transition: 0.3s;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 18px;
  font-weight: 500;

  ${mq('xs')} {
    font-size: 22px;
  }

  ${mq('sm')} {
    font-size: 14px;
  }

  ${mq('md')} {
    font-size: 18px;
  }

  ${mq('lg')} {
    font-size: 14px;
  }

  ${mq('xl')} {
    font-size: 20px;
  }
`;

const BlogArticleContainer = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  border-radius: 10px;

  &:hover {
    transform: translateY(-10px);
  }

  &:hover ${TitleContainer} {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:hover ${Title} {
    color: white;
  }

  ${mq('xs')} {
    width: 80%;
  }

  ${mq('sm')} {
    width: 43%;
  }

  ${mq('lg')} {
    width: 27%;
  }

  ${mq('xl')} {
    width: 29%;
  }
`;

const Image = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  border-radius: 10px;
  z-index: -1;
`;

const Category = styled(Button)`
  position: absolute;
  right: 0;
  margin-top: 15px;
  margin-right: 15px;

  &:hover {
    background-color: white;
    border-color: white;
    color: black;
  }
`;

const BlogArticle = ({
  article,
  cleanParams,
}: BlogArticlesProps): JSX.Element => {
  return (
    <BlogArticleContainer to={`/blog/${article?.slug}`} onClick={cleanParams}>
      {article?.category?.name && (
        <Category size="sm" variant="white">
          {article?.category?.name}
        </Category>
      )}
      <TitleContainer>
        <Title>{article?.name}</Title>
      </TitleContainer>
      <Image image={article?.cover?.gatsbyImageData} />
    </BlogArticleContainer>
  );
};

export default BlogArticle;
