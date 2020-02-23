import React from 'react';

import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <section>
    <Header />
    <main role="main">{children}</main>
    <Footer />
  </section>
);

export default Layout;
