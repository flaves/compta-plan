import React from 'react';
import { css, useTheme } from '@emotion/react';
import Img from 'gatsby-image';

import useParallax from '../../hooks/useParallax';
import mq from '../../styles/mq';

import { ThemeType } from '../../styles/theme';

interface HeroProps {
  background: any;
  children: React.ReactNode;
  defaultHeight?: string;
}

const Hero: React.FC<HeroProps> = ({
  background,
  children,
  defaultHeight = `600px`,
}) => {
  const { color } = useTheme<ThemeType>();
  const [ref, value] = useParallax();

  return (
    <section
      css={css`
        background-color: ${color.black};
        height: ${defaultHeight};
        position: relative;
        overflow: hidden;
      `}
      ref={ref}
    >
      <div
        css={css`
          height: 100%;

          &::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: hsla(0, 0%, 0%, 0.6);
          }
        `}
        style={{
          transform: `translate3d(0, ${value * 2}px, 0)`,
        }}
      >
        <Img
          fluid={background}
          css={css`
            position: initial !important;
            max-width: 768px;
            margin: 0 auto;

            ${mq(`md`)} {
              max-width: initial;
              margin: initial;
            }
          `}
        />
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
          padding: 1rem;
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default React.memo(Hero);
