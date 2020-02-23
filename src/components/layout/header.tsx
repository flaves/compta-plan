import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { animated as a, useSpring } from 'react-spring';

import mq from '../../styles/mq';
import Logo from '../../svg/ball.svg';

import { ThemeType } from '../../styles/theme';

export interface LinkType {
  label: string;
  path: string;
}

const links: LinkType[] = [
  {
    label: `Nos Solutions`,
    path: `/nos-solutions`,
  },
  {
    label: `Nos Offres`,
    path: `/nos-offres`,
  },
  {
    label: `Nos Services`,
    path: `/nos-services`,
  },
  {
    label: `Primes & Subsides`,
    path: `/primes-subsides`,
  },
  {
    label: `Contact`,
    path: `/contact`,
  },
];

const Header: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const sticky = useSpring({
    background: active ? `hsla(0, 0%, 100%, 100%)` : `hsla(0, 0%, 100%, 0%)`,
  });
  const { color, fontWeight } = useTheme<ThemeType>();

  const onScroll = () =>
    window.pageYOffset > 50 ? setActive(true) : setActive(false);

  useEffect(() => {
    document.addEventListener(`scroll`, onScroll);

    return () => document.removeEventListener(`scroll`, onScroll);
  });

  const renderLinks = () => (
    <nav
      css={css`
        height: 100%;
      `}
    >
      <ul
        css={css`
          height: 100%;

          ${mq(`md`)} {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      >
        {links.map((link, key) => (
          <li
            key={key}
            css={css`
              padding: 0 25px;
            `}
          >
            <Link
              to={link.path}
              css={css`
                font-size: 16px;
                font-weight: 600;
                color: #959595;
                transition: color 0.3s;
              `}
              activeStyle={{
                color: color.primary,
              }}
              partiallyActive
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <a.header
      css={css`
        position: fixed;
        width: 100vw;
        height: 100px;
        z-index: 10000;
      `}
      style={sticky}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          padding: 0 50px;
        `}
      >
        <Link to="/">
          <Logo
            css={css`
              width: 50px;
              height: 50px;
            `}
          />
        </Link>
        {renderLinks()}
        <div>
          <a
            href="https://my.comptaplan.be"
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              background-color: ${color.primary};
              color: ${color.white};
              padding: 12px 20px;
              font-weight: ${fontWeight.semiBold};
              border-radius: 35px;
            `}
          >
            My Compta Plan
          </a>
        </div>
      </div>
    </a.header>
  );
};

export default Header;
