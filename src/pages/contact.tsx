import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/shared/hero';
import Tabs from '../components/contact/tabs';
import Address from '../components/contact/address';
import Email from '../components/contact/email';

import H1 from '../components/shared/styled/h1';

const Contact: React.FC = () => {
  const [current, setCurrent] = useState<string>(``);
  const { mobileHero, desktopHero, allContentfulAddress } = useStaticQuery(
    query
  );

  useEffect(() => {
    allContentfulAddress?.edges?.map((item: { node: { id: string } }) => {
      setCurrent(item?.node?.id);
    });
  }, [allContentfulAddress]);

  const sources = [
    mobileHero.childImageSharp.fluid,
    {
      ...desktopHero.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

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
};

const query = graphql`
  {
    mobileHero: file(
      name: { eq: "hero" }
      relativeDirectory: { eq: "contact" }
    ) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 600, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desktopHero: file(
      name: { eq: "hero" }
      relativeDirectory: { eq: "contact" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 800, cropFocus: ATTENTION) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allContentfulAddress(limit: 1, sort: { fields: name, order: ASC }) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export default Contact;
