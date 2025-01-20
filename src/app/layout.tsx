import type { Viewport } from 'next';
import type { ReactNode } from 'react';
import { DefaultLayout } from '../components/layout/layout';

import './global.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: false,
};

type Props = {
  children: ReactNode;
};

export default async function Layout(props: Props) {
  const { children } = props;
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-w-[320px] antialiased scroll-smooth">
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
