import React, { useEffect, useRef, useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { Link } from 'gatsby';
import { animated as a, useSpring } from 'react-spring';

import Dropdown from './dropdown';

import mq from '../../styles/mq';
import useGetNavLinks from '../../hooks/useGetNavLinks';
import useOutsideClick from '../../hooks/useOutsideClick';

import Logo from '../../svg/ball.svg';

import Chevron from '../../svg/chevron.svg';

export interface LinkType {
  label: string;
  path: string;
  dropdown?: LinkType[];
}

interface HeaderProps {
  mobileOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ mobileOpen }) => {
  const [active, setActive] = useState<boolean>(false);
  const [open, setOpen] = useState<number | undefined>();
  const sticky = useSpring({
    background:
      active && !mobileOpen
        ? `hsla(0, 0%, 100%, 100%)`
        : `hsla(0, 0%, 100%, 0%)`,
    boxShadow: active
      ? `0 5px 10px hsla(0, 0%, 0%, .1)`
      : `0 0 0 hsla(0, 0%, 0%, 0%)`,
  });
  const { color, fontWeight } = useTheme();
  const links = useGetNavLinks();
  const nav = useRef(null);
  useOutsideClick(nav, () => open && setOpen(undefined));

  const onScroll = () =>
    window.pageYOffset > 100 ? setActive(true) : setActive(false);

  useEffect(() => {
    document.addEventListener(`scroll`, onScroll);

    return () => document.removeEventListener(`scroll`, onScroll);
  });

  const renderLinks = () => (
    <nav
      css={css`
        height: 100%;
      `}
      ref={nav}
    >
      <ul
        css={css`
          display: none;
          height: 100%;
          position: relative;

          ${mq(`lg`)} {
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
              padding: 0 15px;
              position: relative;

              ${mq(`xl`)} {
                padding: 0 25px;
              }
            `}
          >
            <Link
              to={link.path}
              css={css`
                color: ${open === key ? color.primary : `#959595`};
                font-size: 16px;
                font-weight: ${fontWeight.medium};
                transition: color 0.3s;

                &:hover {
                  color: ${color.primary};

                  svg {
                    fill: ${color.primary};
                  }
                }
              `}
              style={{
                fill: open === key ? color.primary : `#959595`,
              }}
              activeStyle={{
                color: color.primary,
                fill: `${color.primary}`,
              }}
              partiallyActive
              onClick={(e) => {
                if (link?.dropdown) {
                  e.preventDefault();
                  if (open === key) {
                    setOpen(undefined);
                  } else {
                    setOpen(key);
                  }
                }
              }}
            >
              {link.label}
              {link?.dropdown && (
                <Chevron
                  css={css`
                    width: 14px;
                    height: 14px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%)
                      rotate(${open === key ? `270deg` : `90deg`});
                    bottom: -18px;
                    transition: fill 0.3s, transform 0.3s;
                  `}
                />
              )}
            </Link>
            {link?.dropdown && (
              <Dropdown links={link?.dropdown} open={open === key} />
            )}
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
          padding: 0 20px;

          ${mq(`xl`)} {
            padding: 0 50px;
          }
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
