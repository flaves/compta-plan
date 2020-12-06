import React from 'react';
import { css, useTheme } from '@emotion/react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import mq from '../../styles/mq';

import H2 from '../shared/styled/h2';

import Chevron from '../../svg/chevron.svg';

import { ThemeType } from '../../styles/theme';
import OfferType from '../../types/offer';
import ServiceType from '../../types/service';

const Offers: React.FC = () => {
  const { color } = useTheme<ThemeType>();
  const { allContentfulOffer, allContentfulService } = useStaticQuery(query);

  const offers: OfferType[] = allContentfulOffer?.edges?.map(
    (item: { node: OfferType }) => item?.node
  );
  const services: ServiceType[] = allContentfulService?.edges?.map(
    (item: { node: ServiceType }) => item?.node
  );

  const renderOffers = (offers: any[]) => (
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;
        margin: -10px;
      `}
    >
      {offers?.map((offer: OfferType | ServiceType) => (
        <li
          key={offer?.id}
          css={css`
            margin-bottom: 20px;

            ${mq(`md`)} {
              flex: 0 0 33.333333%;
              max-width: 33.3333333%;
              padding: 0 10px;
              margin-bottom: 0;

              &:nth-of-type(3n + 2) {
                margin-top: 20px;
              }

              &:nth-of-type(3n + 3) {
                margin-top: 40px;
              }
            }
          `}
        >
          <article
            css={css`
              background-color: white;
              border-radius: 10px;
              overflow: hidden;
              transition: background-color 0.5s,
                transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
              box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);

              &:hover {
                background-color: black;
                transform: translate3d(0px, -5px, 0px);

                h3 {
                  color: white;
                }

                a {
                  background-color: ${color.primary};
                  border-radius: 50px;
                  width: 130px;

                  span {
                    opacity: 1;
                  }

                  svg {
                    position: initial;
                    left: 0;
                  }
                }
              }
            `}
          >
            <div>
              <Img fluid={offer?.cover?.fluid} />
            </div>
            <div
              css={css`
                padding: 25px;
              `}
            >
              <h3
                css={css`
                  color: black;
                  font-size: 24px;
                  font-weight: bold;
                  margin-bottom: 10px;
                  transition: color 0.3s;
                `}
              >
                {offer?.name}
              </h3>
              <p
                css={css`
                  color: #a0a0a0;
                  font-size: 14px;
                  font-weight: 500;
                  min-height: 110px;
                  margin-bottom: 15px;
                `}
              >
                {offer?.description}
              </p>
              <Link
                to={`/${
                  offer?.internal?.type === `ContentfulOffer`
                    ? `nos-offres`
                    : `nos-services`
                }/${offer?.slug}`}
                css={css`
                  background-color: black;
                  border-radius: 50%;
                  color: white;
                  height: 40px;
                  width: 40px;
                  transition: background-color 0.3s, border-radius 0.3s,
                    width 0.3s;
                  display: flex;
                  justify-content: center;

                  align-items: center;
                `}
              >
                <div
                  css={css`
                    text-align: center;
                    display: flex;
                    align-items: center;
                  `}
                >
                  <span
                    css={css`
                      opacity: 0;
                      font-size: 14px;
                      font-weight: 500;
                    `}
                  >
                    Découvrir
                  </span>
                  <Chevron
                    css={css`
                      width: 12px;
                      height: 12px;
                      fill: white;
                      margin-left: 5px;
                      position: relative;
                      left: -36px;
                    `}
                  />
                </div>
              </Link>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      css={css`
        background-color: #f4f4f4;
        padding: 100px 25px;

        ${mq(`lg`)} {
          padding: 150px 200px;
        }
      `}
    >
      <H2
        css={css`
          max-width: 700px;
          margin-bottom: 100px;
        `}
      >
        Des offres et services adaptés à vos besoins.
      </H2>
      {renderOffers([...offers, ...services])}
    </section>
  );
};

const query = graphql`
  {
    allContentfulOffer {
      edges {
        node {
          id
          name
          description
          content {
            raw
          }
          slug
          cover {
            fluid(
              maxWidth: 420
              maxHeight: 200
              cropFocus: CENTER
              quality: 90
              resizingBehavior: FILL
            ) {
              ...GatsbyContentfulFluid
            }
          }
          internal {
            type
          }
        }
      }
    }
    allContentfulService {
      edges {
        node {
          id
          name
          description
          content {
            raw
          }
          slug
          cover {
            fluid(
              maxWidth: 420
              maxHeight: 200
              cropFocus: CENTER
              quality: 90
              resizingBehavior: FILL
            ) {
              ...GatsbyContentfulFluid
            }
          }
          internal {
            type
          }
        }
      }
    }
  }
`;

export default Offers;
