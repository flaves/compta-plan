import type { ReactNode } from 'react';
import { Footer } from './components/footer';
import { Header } from './components/header';

type Props = {
  children: ReactNode;
};

export function DefaultLayout(props: Props) {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
