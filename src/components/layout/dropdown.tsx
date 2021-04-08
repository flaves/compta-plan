import React from 'react';
import { css, useTheme } from '@emotion/react';
import { Link } from 'gatsby';
import { animated as a, useSpring } from 'react-spring';

import { LinkType } from './header';

interface DropdownProps {
  links: LinkType[];
  open: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ links, open }) => {
  const { color, fontWeight } = useTheme();
  const dropdownOpen = useSpring({
    opacity: open ? 1 : 0,
    visibility: open ? `visible` : `hidden`,
    transform: open
      ? `translate3d(-50%, 0px, 0px)`
      : `translate3d(-50%, 30px, 0px)`,
  });

  return (
    <a.div
      css={css`
        background-color: ${color.black};
        border-radius: 5px;
        position: absolute;
        padding: 1.5rem;
        width: 250px;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
      `}
      style={dropdownOpen}
    >
      <ul>
        {links.map((link) => (
          <li
            key={link?.label}
            css={css`
              margin-bottom: 0.75rem;
              padding-bottom: 0.5rem;
              border-bottom: 1px solid hsla(0, 0%, 78%, 0.2);

              &:last-of-type {
                padding-bottom: 0;
                margin-bottom: 0;
                border-bottom: 0;
              }
            `}
          >
            <Link
              activeStyle={{
                color: color.primary,
              }}
              partiallyActive
              to={link?.path}
              css={css`
                font-size: 16px;
                font-weight: ${fontWeight.medium};
                color: #959595;
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
    </a.div>
  );
};

export default Dropdown;
