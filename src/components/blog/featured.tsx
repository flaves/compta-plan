import React, { useEffect, useState } from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import mq from '../../styles/mq';

import H2 from '../shared/styled/h2';
import Link from '../shared/link';

import ArticleType from '../../types/article';

const Container = styled.div`
  margin: auto;
  max-width: 1280px;
  padding: 0 16px;

  ${mq('sm')} {
    max-width: 1280px;
    padding: 0 24px;
  }
`;

const Featured: React.FC = () => {
  const [featured, setFeatured] = useState<ArticleType>();
  const { allContentfulArticles } = useStaticQuery(query);
  const { fontWeight } = useTheme();

  useEffect(() => {
    setFeatured([...allContentfulArticles?.edges]?.shift()?.node);
  }, [allContentfulArticles]);

  return (
    <section>
      <Container>
        <div
          css={css`
            padding: 40px 0;

            ${mq(`md`)} {
              padding: 70px 0;
            }
          `}
        >
          <H2
            css={css`
              margin-bottom: 40px;
            `}
          >
            À la une
          </H2>
          <div
            css={css`
              ${mq(`md`)} {
                display: flex;
                margin: 0 -1rem;
              }
            `}
          >
            <div
              css={css`
                ${mq(`md`)} {
                  flex: 0 0 50%;
                  max-width: 50%;
                  padding: 0 1rem;
                }
              `}
            >
              {featured && (
                <GatsbyImage image={featured?.cover?.gatsbyImageData} />
              )}
            </div>
            <div
              css={css`
                ${mq(`md`)} {
                  flex: 0 0 50%;
                  max-width: 50%;
                  padding: 0 1rem;
                }
              `}
            >
              <div
                css={css`
                  padding: 2rem;
                `}
              >
                <h3
                  css={css`
                    font-size: 20px;
                    font-weight: ${fontWeight.bold};
                    margin-bottom: 20px;

                    ${mq(`md`)} {
                      font-size: 24px;
                    }
                  `}
                >
                  {featured?.name}
                </h3>
                <p
                  css={css`
                    color: #a9a9a9;
                    font-size: 16px;
                    margin-bottom: 50px;
                  `}
                >
                  {featured?.description}
                </p>
                <Link to={`/blog/${featured?.slug}`}>En savoir plus</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const query = graphql`
  {
    allContentfulArticles(sort: { date: DESC }, limit: 1) {
      edges {
        node {
          id
          name
          description
          slug
          cover {
            gatsbyImageData(width: 650, height: 450, quality: 100)
          }
        }
      }
    }
  }
`;

export default Featured;
