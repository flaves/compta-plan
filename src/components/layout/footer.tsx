import React from 'react';
import { css, useTheme } from '@emotion/react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import mq from '../../styles/mq';

import Flaves from '../../svg/flaves.svg';

import { LinkType } from './header';
import OfferType from '../../types/offer';
import ServiceType from '../../types/service';

const bottomLinks: LinkType[] = [
  {
    label: `Mentions légales`,
    path: `/`,
  },
  {
    label: `Politque de cookies`,
    path: `/`,
  },
  {
    label: `Traitement des données`,
    path: `/`,
  },
];

const Footer: React.FC = () => {
  const { color, fontWeight } = useTheme();
  const { allContentfulOffer, allContentfulService } = useStaticQuery(query);

  const pages = [
    {
      label: `Accueil`,
      path: ``,
    },
    {
      label: `Accès Cloudbizz`,
      path: `cloudbizz`,
    },
    {
      label: `Blog`,
      path: `blog`,
    },
    {
      label: `Contact`,
      path: `contact`,
    },
  ];

  const solutions = [
    {
      label: `My Compta Plan`,
      path: `my-comptaplan`,
    },
    {
      label: `Primes & Subsides`,
      path: `primes-subsides`,
    },
  ];

  const offers: LinkType[] = allContentfulOffer?.edges?.map(
    (item: { node: OfferType }) => ({
      label: item?.node?.name,
      path: item?.node?.slug,
    })
  );

  const services: LinkType[] = allContentfulService?.edges?.map(
    (item: { node: ServiceType }) => ({
      label: item?.node?.name,
      path: item?.node?.slug,
    })
  );

  const renderLinks = (links: LinkType[]) => (title: string) => (
    prefix?: string
  ) => (
    <div
      css={css`
        margin-bottom: 50px;

        ${mq(`md`)} {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 1rem;
        }

        ${mq(`lg`)} {
          flex: 0 0 25%;
          max-width: 25%;
        }

        ${mq(`xl`)} {
          flex: initial;
          max-width: initial;
        }
      `}
    >
      <h4
        css={css`
          color: ${color.black};
          font-size: 16px;
          font-weight: ${fontWeight.bold};
          margin-bottom: 10px;

          ${mq(`md`)} {
            margin-bottom: 30px;
          }
        `}
      >
        {title}
      </h4>
      <ul>
        {links?.map((link, key) => (
          <li
            key={key}
            css={css`
              margin-bottom: 10px;
            `}
          >
            <Link
              to={`${prefix ? `/${prefix}` : ``}/${link?.path}`}
              activeStyle={{
                color: color.primary,
              }}
              css={css`
                color: #a9a9a9;
                font-size: 14px;
                font-weight: ${fontWeight.medium};
                transition: color 0.3s;

                &:hover {
                  color: ${color.primary};
                }
              `}
            >
              {link?.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderBottomLinks = () => (
    <ul
      css={css`
        ${mq(`lg`)} {
          display: flex;
        }
      `}
    >
      {bottomLinks?.map((link, key) => (
        <li
          key={key}
          css={css`
            margin-bottom: 10px;

            ${mq(`lg`)} {
              margin-right: 50px;
              margin-bottom: 0;
            }

            a {
              color: hsla(0, 0%, 0%, 0.5);
              font-size: 14px;
              font-weight: ${fontWeight.medium};
              transition: color 0.3s;

              &:hover {
                color: hsla(0, 0%, 0%, 1);
              }
            }
          `}
        >
          <Link to={link?.path}>{link?.label}</Link>
        </li>
      ))}
      <li
        css={css`
          margin-left: auto;
        `}
      >
        <span
          css={css`
            color: ${color.black};
            font-size: 14px;
            font-weight: ${fontWeight.medium};
          `}
        >
          Copyright {new Date().getFullYear()} Compta Plan
        </span>
      </li>
    </ul>
  );

  return (
    <footer
      css={css`
        background-color: #f9f9f9;
        padding: 50px;

        ${mq(`md`)} {
          padding: 100px;
        }
      `}
    >
      <div
        css={css`
          margin-bottom: 100px;

          ${mq(`md`)} {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 0 -1rem 100px -1rem;
          }
        `}
      >
        {renderLinks(pages)(`Pages`)(``)}
        {renderLinks(solutions)(`Nos Solutions`)(`nos-solutions`)}
        {renderLinks(offers)(`Nos Offers`)(`nos-offres`)}
        {renderLinks(services)(`Nos Services`)(`nos-services`)}
        <div
          css={css`
            ${mq(`md`)} {
              padding: 0 1rem;
            }
          `}
        >
          <h4
            css={css`
              color: ${color.black};
              font-size: 16px;
              font-weight: ${fontWeight.bold};
              margin-bottom: 30px;
            `}
          >
            Contact
          </h4>
          <ul
            css={css`
              li {
                color: #a9a9a9;
                font-size: 14px;
                font-weight: ${fontWeight.medium};
                transition: color 0.3s;
                margin-bottom: 10px;
              }
            `}
          >
            <li>+32 10 65 07 76</li>
            <li>info@comptaplan.be</li>
          </ul>
        </div>
      </div>
      <div>{renderBottomLinks()}</div>
      <div
        css={css`
          text-align: center;
          margin-top: 50px;
        `}
      >
        <a href="https://flav.es" target="_blank" rel="noopener noreferrer">
          <Flaves />
        </a>
      </div>
    </footer>
  );
};

const query = graphql`
  {
    allContentfulOffer {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
    allContentfulService {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

export default Footer;
