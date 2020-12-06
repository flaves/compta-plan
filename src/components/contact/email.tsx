import React from 'react';
import { css, useTheme } from '@emotion/react';
import { ThemeType } from '../../styles/theme';
import mq from '../../styles/mq';

const Email: React.FC = () => {
  const { color, fontWeight } = useTheme<ThemeType>();

  return (
    <section
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${color.black};
        color: ${color.white};
        font-size: 20px;
        font-weight: ${fontWeight.semiBold};
        height: 300px;

        ${mq(`md`)} {
          position: relative;
          top: -75px;
          font-size: 36px;
          margin: 0 100px;
        }
      `}
    >
      <span>info@comptaplan.be</span>
    </section>
  );
};

export default Email;
