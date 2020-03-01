import React, { useState } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import Header from './header';
import Footer from './footer';
import Mobile from './mobile';

import mq from '../../styles/mq';

import { ThemeType } from '../../styles/theme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { color, fontWeight } = useTheme<ThemeType>();

  return (
    <section>
      <Header />
      <main role="main">{children}</main>
      <Footer />
      <Mobile open={open} />
      <div
        css={css`
          background-color: ${open ? color.primary : `black`};
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color 0.3s;

          ${mq(`lg`)} {
            display: none;
          }
        `}
      >
        <button
          css={css`
            appearance: none;
            background-color: transparent;
            border: 0;
            color: ${color.white};
            font-weight: ${fontWeight.medium};
            outline: none;
          `}
          onClick={() => setOpen(!open)}
        >
          {open ? `fermer` : `menu`}
        </button>
      </div>
    </section>
  );
};

export default Layout;
