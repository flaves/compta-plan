import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from 'gatsby';

import mq from '../../styles/mq';

import { LinkType } from './header';
import { ThemeType } from '../../styles/theme';

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
  const { color, fontWeight } = useTheme<ThemeType>();

  const renderBottomLinks = () => (
    <ul
      css={css`
        ${mq(`md`)} {
          display: flex;
        }
      `}
    >
      {bottomLinks?.map((link, key) => (
        <li
          key={key}
          css={css`
            margin-bottom: 10px;

            ${mq(`md`)} {
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
      <div>{renderBottomLinks()}</div>
    </footer>
  );
};

export default Footer;
