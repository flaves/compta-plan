import React from 'react';
import { useTheme } from 'emotion-theming';

import { ThemeType } from '../../styles/theme';
import { css } from '@emotion/core';
import mq from '../../styles/mq';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: `sm` | `md` | `lg`;
  variant?: `primary` | `accent` | `success` | `white`;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  variant,
  ...props
}) => {
  const { color, fontWeight } = useTheme<ThemeType>();

  const renderSize = () => {
    switch (size) {
      case 'sm':
        return css`
          padding: 10px 20px;
        `;
      case 'md':
        return css`
          padding: 12px 25px;
        `;
      case 'lg':
        return css`
          padding: 10px 30px;

          ${mq(`lg`)} {
            padding: 12px 40px;
          }
        `;
      default:
        return css`
          padding: 12px 25px;
        `;
    }
  };

  const renderVariant = () => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${color.primary};
          border-color: ${color.primary};
          color: ${color.white};
        `;
      case 'accent':
        return css`
          background-color: ${color.accent};
          border-color: ${color.accent};
          color: ${color.white};
        `;
      case 'success':
        return css`
          background-color: ${color.success};
          border-color: ${color.success};
          color: ${color.white};
        `;
      case 'white':
        return css`
          background-color: ${color.white};
          border-color: ${color.white};
          color: ${color.black};

          &:hover {
            background-color: transparent;
            color: ${color.white};
          }
        `;
      default:
        return css`
          background-color: ${color.primary};
          color: ${color.white};
        `;
    }
  };

  return (
    <button
      {...props}
      css={css`
        border: 2px solid ${color.primary};

        ${renderSize()}
        ${renderVariant()}
        
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
    </button>
  );
};

export default Button;
