import React from 'react';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import SEO from '../components/helpers/seo';
import Hero from '../components/home/hero';
import Product from '../components/home/product';
import Offers from '../components/home/offers';

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <section
      css={css`
        padding: 135px 0;
      `}
    >
      <Hero />
      <Product />
      <Offers />
    </section>
  </Layout>
);

export default Home;
