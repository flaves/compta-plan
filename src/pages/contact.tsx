import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { withArtDirection } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Hero from '../components/shared/hero';
import Tabs from '../components/contact/tabs';
import Address from '../components/contact/address';
import Email from '../components/contact/email';

import H1 from '../components/shared/styled/h1';
import { ContentfulPage } from '../types/contentful';

type ContactPageData = {
  mobileHero: any;
  desktopHero: any;
  allContentfulAddress: any;
  contentfulPage: ContentfulPage;
};

type ContactPageProps = PageProps<ContactPageData>;

function ContactPage(props: ContactPageProps) {
  const { data } = props;
  const { mobileHero, desktopHero, allContentfulAddress } = data;
  const [current, setCurrent] = useState<string>(``);

  useEffect(() => {
    allContentfulAddress?.edges?.map((item: { node: { id: string } }) => {
      setCurrent(item?.node?.id);
    });
  }, [allContentfulAddress]);

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
          <H1>Contactez-nous</H1>
        </div>
      </Hero>
      <Tabs current={current} setCurrent={setCurrent} />
      <Address current={current} />
      <Email />
    </Layout>
  );
}

export function Head(props: HeadProps<ContactPageData>) {
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
    contentfulPage(slug: { eq: "contact" }) {
      id
      seo_title
      seo_description
    }
    mobileHero: file(
      name: { eq: "hero" }
      relativeDirectory: { eq: "contact" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 768
          height: 600
          transformOptions: { cropFocus: ATTENTION }
        )
      }
    }
    desktopHero: file(
      name: { eq: "hero" }
      relativeDirectory: { eq: "contact" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1440
          height: 600
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
    allContentfulAddress(limit: 1, sort: { name: ASC }) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export default ContactPage;
