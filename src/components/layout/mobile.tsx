import React, { useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { Link } from 'gatsby';
import { animated as a, useSpring, useTrail } from 'react-spring';

import mq from '../../styles/mq';
import useGetNavLinks from '../../hooks/useGetNavLinks';

import { LinkType } from './header';

interface MobileProps {
  open: boolean;
}

const Mobile: React.FC<MobileProps> = ({ open }) => {
  const { color, fontWeight } = useTheme();
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
  const [current, setCurrent] = useState<number | undefined>();

  const renderLinks = (links: LinkType[]) => (trail: any) => (
    <ul>
      {trail?.map((props: any, key: number) => {
        const link = links?.[key];

        return (
          <a.li
            key={key}
            css={css`
              margin-bottom: 40px;

              & > a {
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
              onClick={(e) => {
                if (link?.dropdown) {
                  e.preventDefault();
                  setCurrent(current === key ? undefined : key);
                }
              }}
              partiallyActive
            >
              {link?.label}
            </Link>
            {link?.dropdown && (
              <ul
                css={css`
                  margin-top: ${current === key ? `20px` : `0px`};
                  max-height: ${current === key ? `185px` : `0px`};
                  overflow: hidden;
                  transition: max-height 0.5s;
                  padding-left: 10px;
                `}
              >
                {link?.dropdown?.map((item, key) => {
                  return (
                    <li
                      key={key}
                      css={css`
                        margin-bottom: 20px;

                        & > a {
                          color: hsl(0, 0%, 48%);
                          font-size: 20px;
                          font-weight: ${fontWeight.regular};
                          transition: color 0.3s;
                        }
                      `}
                    >
                      <Link
                        to={item?.path}
                        activeStyle={{
                          color: color.primary,
                        }}
                        partiallyActive
                      >
                        {item?.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
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
        overflow: auto;

        ${mq(`lg`)} {
          display: none;
        }
      `}
      style={translate}
    >
      <div
        css={css`
          padding: 150px 50px;
        `}
      >
        {renderLinks(links)(trail)}
      </div>
    </a.nav>
  );
};

export default Mobile;
