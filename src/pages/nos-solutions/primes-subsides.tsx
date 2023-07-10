import React from 'react';
import { css } from '@emotion/react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { withArtDirection } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Hero from '../../components/shared/hero';
import Intro from '../../components/primes/intro';
import Content from '../../components/primes/content';
import MeetUp from '../../components/shared/meet-up';
import Link from '../../components/shared/link';
import mq from '../../styles/mq';
import H1 from '../../components/shared/styled/h1';
import Contact from '../../components/shared/contact';
import SubTitle from '../../components/shared/styled/sub-title';
import { ContentfulPage } from '../../types/contentful';

type BonusesPageData = {
  contentfulPage: ContentfulPage;
  mobileHero: any;
  desktopHero: any;
};

type BonusesPageProps = PageProps<BonusesPageData>;

function BonusesPage(props: BonusesPageProps) {
  const { data } = props;
  const { mobileHero, desktopHero } = data;

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
      <Hero background={sources}>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            text-align: center;
          `}
        >
          <div>
            <H1
              css={css`
                margin-bottom: 10px;
              `}
            >
              Primes & Subsides
            </H1>
            <SubTitle
              css={css`
                ${mq(`sm`)} {
                  max-width: 450px;
                }
              `}
            >
              Vous êtes un porteur de projet, une starter, une PME, un
              indépendant, un indépendant à titre complémentaire ?
            </SubTitle>
            <Link size="lg" to="/contact">
              Vérifier mon éligibilité
            </Link>
          </div>
        </div>
      </Hero>
      <Intro />
      <Content />
      <MeetUp />
      <Contact />
    </Layout>
  );
}

export function Head(props: HeadProps<BonusesPageData>) {
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
    contentfulPage(slug: { eq: "bonuses" }) {
      id
      seo_title
      seo_description
    }
    mobileHero: file(name: { eq: "hero" }, relativeDirectory: { eq: "bonus" }) {
      childImageSharp {
        gatsbyImageData(width: 500, height: 600, layout: CONSTRAINED)
      }
    }
    desktopHero: file(
      name: { eq: "hero" }
      relativeDirectory: { eq: "bonus" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

export default BonusesPage;
