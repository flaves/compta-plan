import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import Img from 'gatsby-image';

import useParallax from '../../hooks/useParallax';

import { ThemeType } from '../../styles/theme';

interface HeroProps {
  background: any;
  children: React.ReactNode;
  defaultHeight?: number;
}

const Hero: React.FC<HeroProps> = ({
  background,
  children,
  defaultHeight = 700,
}) => {
  const { color } = useTheme<ThemeType>();
  const [ref, value] = useParallax();

  return (
    <section
      css={css`
        background-color: ${color.black};
        height: ${defaultHeight}px;
        position: relative;
        overflow: hidden;
      `}
      ref={ref}
    >
      <div
        style={{
          transform: `translate3d(0, ${value}px, 0)`,
        }}
      >
        <Img fluid={background} />
      </div>
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: hsla(0, 0%, 0%, 0.6);
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        `}
      >
        <div>{children}</div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
