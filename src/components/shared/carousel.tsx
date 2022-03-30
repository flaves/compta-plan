import React from 'react';
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
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

const CarouselContainer = styled.div`
  ${mq(`md`)} {
    padding: 0 20px;
  }
`;

const CardContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;
  height: 100%;
  /* .gatsby-image-wrapper,
  img, */
  .alice-carousel__stage-item {
    width: 100%;
    height: 100%;
  }
  position: relative;
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0 5px 0 5px;
`;

const OverLay = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: flex-end;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  /* background-color: rgba(255, 255, 255, 0.7); */
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0.9009978991596639) 0%, rgba(99,99,99,0.5984768907563025) 40%, rgba(169,169,169,0.5032387955182073) 70%, rgba(255,255,255,0) 100%);
  /* background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0.8029586834733894) 0%, rgba(99,99,99,0.5032387955182073) 40%, rgba(169,169,169,0.2959558823529411) 70%, rgba(255,255,255,0) 100%); */
`;

const ItemTitle = styled.h2`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-weight: 500;
  padding: 10px;
  font-size: 14px;
  color: white;
    ${mq('xs')} {
        font-size: 18px;
    }
    ${mq('sm')} {
        font-size: 22px;
    }
    ${mq('md')} {
        font-size: 16px;
    }
    ${mq('lg')} {
        font-size: 14px;
    }
    ${mq('xl')} {
        font-size: 16px;
    }
`;

const Image = styled(GatsbyImage)``;

const Category = styled.div`
    z-index: 1;
    padding: 8px;
    font-weight: 400;
    font-size: 12px;
    border-radius: 40px;
    background-color: white;
    margin-top: 5px;
    ${mq('xs')}{
    font-size: 16px;
  }
    ${mq('md')}{
      font-size: 12px;
    }
`;

const Date = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.color.accent};
  border-radius: 40px;
  padding: 8px;
  font-size: 12px;
  margin-top: 5px;
  ${mq('xs')}{
    font-size: 16px;
  }
  ${mq('md')}{
    font-size: 12px;
  }
`;

const Carousel: React.FC<CarouselProps> = ({
  items,
  title,
  desc,
  to,
  prefix,
}) => {
  const { fontWeight } = useTheme();

  const formatDate = (date: string) => {
    const intermediate = date.split("T");
    const newStr = intermediate[0].split("-").join("/") + " " + intermediate[1].split(".")[0];
    const splitSpace = newStr.split(' ');
    const d = splitSpace[0].split('/');
    const newFormat = d[2] + '.' + d[1] + '.' + d[0];
    return newFormat;
  }

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
        1420: {
          items: 3,
        },
        // 1350: {
        //   items: 3,
        // },
      }}
    >
      {items?.map((item, key) => (
        <CarouselContainer key={item?.id || key}>
          <GatsbyLink to={`/${prefix}/${item?.slug}`}>
            <CardContainer>
              <OverLay>
                <CardHeader>
                  {item?.updatedAt && <Date>{formatDate(item?.updatedAt)}</Date>}
                  {item?.category?.name && <Category>{item?.category?.name}</Category>}
                </CardHeader>
                <ItemTitle>{item?.name}</ItemTitle>
              </OverLay>
              <Image image={item?.cover?.gatsbyImageData} />
            </CardContainer>
          </GatsbyLink>
        </CarouselContainer>
      ))}
    </AliceCarousel>
  );

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        .css-7l978s-Carousel {
          max-width: 100% !important;
          padding-left: 12px !important;
        }
        ${mq(`lg`)} {
          flex-direction: row;
          margin: 0 -2rem;
          .css-7l978s-Carousel {
            max-width: 60% !important;
          }
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
