import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/pro-light-svg-icons';

import mq from '../../styles/mq';

import ArticleType from '../../types/article';
import { ThemeType } from '../../styles/theme';

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
  const { color, fontWeight } = useTheme<ThemeType>();

  const renderItems = (items: Items) => (
    <ul
      css={css`
        display: flex;
        margin: 0 -20px;
      `}
    >
      {items?.map((item, key) => (
        <li
          key={item?.id || key}
          css={css`
            flex: 0 0 280px;
            max-width: 280px;
            height: 350px;
            padding: 0 20px;
          `}
        >
          <GatsbyLink to={`/${prefix}/${item?.slug}`}>
            <Img fluid={item?.cover?.fluid} />
          </GatsbyLink>
        </li>
      ))}
    </ul>
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
        <h3
          css={css`
            color: ${color.black};
            font-size: 24px;
            margin-bottom: 15px;

            ${mq(`md`)} {
              font-size: 48px;
            }
          `}
        >
          {title}
        </h3>
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
        <div>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            size="2x"
            css={css`
              margin-right: 10px;
            `}
          />
          <FontAwesomeIcon icon={faArrowCircleRight} size="2x" />
        </div>
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
