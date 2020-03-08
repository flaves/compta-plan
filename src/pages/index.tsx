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
  const { mobileHero, desktopHero } = useStaticQuery(query);

  const sources = [
    mobileHero.childImageSharp.fluid,
    {
      ...desktopHero.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Layout>
      <SEO
        title="Home"
        description="La fiduciaire qui coach votre entreprise."
      />
      <section>
        <Hero background={sources} defaultHeight="100vh">
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;

              ${mq(`md`)} {
                justify-content: initial;
                padding-left: 100px;
              }
            `}
          >
            <div
              css={css`
                text-align: center;

                ${mq(`md`)} {
                  text-align: initial;
                }
              `}
            >
              <h1
                css={css`
                  color: ${color.white};
                  font-size: 30px;
                  margin-bottom: 20px;

                  ${mq(`md`)} {
                    margin-bottom: 15px;
                    font-size: 50px;
                  }

                  ${mq(`lg`)} {
                    font-size: 70px;
                  }

                  ${mq(`xl`)} {
                    font-size: 90px;
                  }
                `}
              >
                La fiduciaire qui coach
                <br /> votre entreprise
              </h1>
              <p
                css={css`
                  color: #a9a9a9;
                  font-size: 16px;
                  font-weight: ${fontWeight.medium};
                  margin-bottom: 50px;
                  max-width: 800px;

                  ${mq(`md`)} {
                    margin-bottom: 70px;
                  }
                `}
              >
                Compta Plan est une fiduciaire de talents qui vous portent pour
                aller plus loin.
                <br />
                <br />
                Au quotidien, nous étudions de nouvelles solutions, nous créons
                de nouveaux outils, nous innovons pour améliorer vos
                performances et être force de proposition.
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
    mobileHero: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 1000, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopHero: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Home;
