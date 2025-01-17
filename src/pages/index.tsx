import React from 'react';
import { css, useTheme } from '@emotion/react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { withArtDirection } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Hero from '../components/shared/hero';
import Product from '../components/home/product';
import Offers from '../components/home/offers';
import Contact from '../components/shared/contact';
import Bonus from '../components/home/bonus';
import News from '../components/home/news';
import Link from '../components/shared/link';
import mq from '../styles/mq';
import { ContentfulPage } from '../types/contentful';

type HomePageData = {
  mobileHero: any;
  desktopHero: any;
  contentfulPage: ContentfulPage;
};

type HomePageProps = PageProps<HomePageData>;

function HomePage(props: HomePageProps) {
  const { data } = props;
  const { mobileHero, desktopHero } = data;
  const { color, fontWeight } = useTheme();

  const sources = withArtDirection(
    mobileHero?.childImageSharp?.gatsbyImageData,
    [
      {
        image: desktopHero?.childImageSharp?.gatsbyImageData,
        media: `(min-width: 768px)`,
      },
    ]
  );

  return (
    <Layout>
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
}

export function Head(props: HeadProps<HomePageData>) {
  const { data } = props;
  return (
    <>
      <title>{data.contentfulPage.seo_title}</title>
      <meta name="description" content={data.contentfulPage.seo_description} />
    </>
  );
}

export const query = graphql`
  {
    contentfulPage(slug: { eq: "home" }) {
      id
      seo_title
      seo_description
    }
    mobileHero: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        gatsbyImageData(
          width: 768
          height: 1000
          transformOptions: { cropFocus: CENTER }
          layout: CONSTRAINED
        )
      }
    }
    desktopHero: file(name: { eq: "hero" }, relativeDirectory: { eq: "home" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default HomePage;
