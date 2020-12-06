import React from 'react';
import { css, useTheme } from '@emotion/react';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import AliceCarousel from 'react-alice-carousel';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faArrowCircleLeft,
//   faArrowCircleRight,
// } from '@fortawesome/pro-light-svg-icons';

import mq from '../../styles/mq';

import H2 from './styled/h2';

import ArticleType from '../../types/article';

type Items = ArticleType[];

interface CarouselProps {
  items: Items;
  title: string;
  desc: string;
  to: string;
  prefix: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  title,
  desc,
  to,
  prefix,
}) => {
  const { fontWeight } = useTheme();

  const renderItems = (items: Items) => (
    <AliceCarousel
      disableButtonsControls
      disableDotsControls
      autoPlay
      autoPlayInterval={2000}
      responsive={{
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      }}
    >
      {items?.map((item, key) => (
        <div
          key={item?.id || key}
          css={css`
            ${mq(`md`)} {
              padding: 0 20px;
            }
          `}
        >
          <div
            css={css`
              border-radius: 5px;
              overflow: hidden;
            `}
          >
            <GatsbyLink to={`/${prefix}/${item?.slug}`}>
              <Img fluid={item?.cover?.fluid} />
            </GatsbyLink>
          </div>
        </div>
      ))}
    </AliceCarousel>
  );

  return (
    <div
      css={css`
        ${mq(`md`)} {
          display: flex;
          margin: 0 -2rem;
        }
      `}
    >
      <div
        css={css`
          margin-bottom: 2rem;

          ${mq(`md`)} {
            flex: 0 0 40%;
            max-width: 40%;
            padding: 0 2rem;
          }
        `}
      >
        <H2>{title}</H2>
        <p
          css={css`
            color: #a9a9a9;
            font-size: 16px;
            font-weight: ${fontWeight.medium};
            margin-bottom: 35px;
          `}
        >
          {desc}
        </p>
        {/*<div>*/}
        {/*  <FontAwesomeIcon*/}
        {/*    icon={faArrowCircleLeft}*/}
        {/*    size="2x"*/}
        {/*    css={css`*/}
        {/*      margin-right: 10px;*/}
        {/*    `}*/}
        {/*  />*/}
        {/*  <FontAwesomeIcon icon={faArrowCircleRight} size="2x" />*/}
        {/*</div>*/}
      </div>
      <div
        css={css`
          ${mq(`md`)} {
            flex: 0 0 60%;
            max-width: 60%;
            padding: 0 2rem;
          }
        `}
      >
        {renderItems(items)}
      </div>
    </div>
  );
};

export default Carousel;
