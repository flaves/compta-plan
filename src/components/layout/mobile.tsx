import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { Link } from 'gatsby';
import { animated as a, useSpring, useTrail } from 'react-spring';

import mq from '../../styles/mq';
import useGetNavLinks from '../../hooks/useGetNavLinks';

import { LinkType } from './header';
import { ThemeType } from '../../styles/theme';

interface MobileProps {
  open: boolean;
}

const Mobile: React.FC<MobileProps> = ({ open }) => {
  const { color, fontWeight } = useTheme<ThemeType>();
  const translate = useSpring({
    transform: `translate3d(0px, ${open ? `0%` : `-100%`}, 0px)`,
  });
  const links = useGetNavLinks();
  const trail = useTrail(links?.length, {
    opacity: open ? 1 : 0,
    config: {
      tension: 80,
    },
    delay: 200,
  });

  const renderLinks = (links: LinkType[]) => (trail: any) => (
    <ul>
      {trail?.map((props: any, key: number) => {
        const link = links?.[key];

        return (
          <a.li
            key={key}
            css={css`
              margin-bottom: 50px;

              a {
                color: #959595;
                font-size: 32px;
                font-weight: ${fontWeight.regular};
                transition: color 0.3s;
              }
            `}
            style={props}
          >
            <Link
              to={link?.path}
              activeStyle={{
                color: color.primary,
              }}
            >
              {link?.label}
            </Link>
          </a.li>
        );
      })}
    </ul>
  );

  return (
    <a.nav
      css={css`
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${color.black};

        ${mq(`lg`)} {
          display: none;
        }
      `}
      style={translate}
    >
      <div
        css={css`
          padding: 200px 50px;
        `}
      >
        {renderLinks(links)(trail)}
      </div>
    </a.nav>
  );
};

export default Mobile;
