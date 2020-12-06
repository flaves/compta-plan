import React from 'react';
import { css, useTheme } from '@emotion/react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

import mq from '../../styles/mq';
import { renderSize, renderVariant, Size, Variant } from './button';

import { ThemeType } from '../../styles/theme';

interface LinkProps extends GatsbyLinkProps<any> {
  size?: Size;
  variant?: Variant;
}

const Link: React.FC<LinkProps> = ({ children, size, variant, ...props }) => {
  const theme = useTheme<ThemeType>();

  const { color, fontWeight } = theme;

  return (
    // @ts-ignore
    <GatsbyLink
      {...props}
      css={css`
        border: 2px solid ${color.primary};
        display: inline-block;

        ${renderSize(size)}
        ${renderVariant(variant)(theme)}
        
        font-size: 14px;
        font-weight: ${fontWeight.semiBold};
        border-radius: 40px;
        cursor: pointer;
        outline: none;
        transition: background-color 0.3s, border-color 0.3s, color 0.3s;

        ${mq(`md`)} {
          font-size: 16px;
        }

        &:hover,
        &:focus {
          outline: none;
        }
      `}
    >
      {children}
    </GatsbyLink>
  );
};

export default Link;
