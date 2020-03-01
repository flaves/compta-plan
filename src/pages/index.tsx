import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/helpers/seo';
import Hero from '../components/shared/hero';
import Product from '../components/home/product';
import Offers from '../components/home/offers';
import Contact from '../components/shared/contact';
import Bonus from '../components/home/bonus';
import News from '../components/home/news';
import Link from '../components/shared/link';

import mq from '../styles/mq';

import { ThemeType } from '../styles/theme';

const Home: React.FC = () => {
  const { color, fontWeight } = useTheme<ThemeType>();
  const { hero } = useStaticQuery(query);

  return (
    <Layout>
      <SEO title="Home" />
      <section>
        <Hero background={hero.childImageSharp.fluid} defaultHeight="100vh">
          <div
            css={css`
              display: flex;
              align-items: center;
              height: 100%;
              padding-left: 100px;
            `}
          >
            <div>
              <h1
                css={css`
                  color: ${color.white};
                  font-size: 30px;
                  margin-bottom: 20px;

                  ${mq(`md`)} {
                    margin-bottom: 15px;
                    font-size: 90px;
                  }
                `}
              >
                La fiduciaire qui coach
                <br /> votre entreprise
              </h1>
              <p
                css={css`
                  font-size: 16px;
                  font-weight: ${fontWeight.medium};
                  color: #a9a9a9;
                  margin-bottom: 50px;

                  ${mq(`md`)} {
                    margin-bottom: 70px;
                  }
                `}
              >
                Compta Plan est une fiduciaire de talents qui vous portent pour
                aller plus loin.
              </p>
              <Link to="/contact">Choisir Compta Plan</Link>
            </div>
          </div>
        </Hero>
        <Product />
        <Offers />
        <Bonus />
        <News />
        <Contact />
      </section>
    </Layout>
  );
};

const query = graphql`
  {
    hero: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Home;
