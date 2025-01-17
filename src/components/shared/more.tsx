import React from 'react';
import { css, useTheme } from '@emotion/react';
import { Link, GatsbyLinkProps } from 'gatsby';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

const More: React.FC<Omit<GatsbyLinkProps<{}>, 'ref'>> = ({
  children,
  ...props
}) => {
  const { color, fontWeight } = useTheme();

  return (
    <Link
      css={css`
        font-size: 16px;
        font-weight: ${fontWeight.semiBold};
        color: ${color.text};
        position: relative;
        text-transform: uppercase;

        &:hover {
          &::after {
            width: 100%;
          }
        }

        &::after {
          transition: width 0.3s;
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 50%;
          background-color: ${color.text};
          height: 2px;
        }
      `}
      {...props}
    >
      {children}
    </Link>
  );
};

export default More;
