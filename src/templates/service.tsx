import React from 'react';
import { css } from '@emotion/react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { withArtDirection } from 'gatsby-plugin-image';

import H1 from '../components/shared/styled/h1';
import Hero from '../components/shared/hero';

import Layout from '../components/layout';
import Link from '../components/shared/link';
import Intro from '../components/shared/intro';
import Services from '../components/service/services';
import MeetUp from '../components/shared/meet-up';
import Contact from '../components/shared/contact';
import More from '../components/service/more';

import SubTitle from '../components/shared/styled/sub-title';

import ServiceType from '../types/service';

type ServicePageData = {
  service: ServiceType;
  mobileHero: any;
  desktopHero: any;
};

type ServicePageProps = PageProps<ServicePageData>;

function ServicePage(props: ServicePageProps) {
  const { data } = props;
  const { service, mobileHero, desktopHero } = data;
  const { content } = service;
  const sources = withArtDirection(mobileHero?.gatsbyImageData, [
    {
      image: desktopHero?.gatsbyImageData,
      media: `(min-width: 768px)`,
    },
  ]);
  return (
    <Layout>
      <section>
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
              <H1>{service?.name}</H1>
              <SubTitle>{service?.description}</SubTitle>
              <Link to="/contact" size="lg">
                Rencontrons-nous
              </Link>
            </div>
          </div>
        </Hero>
        <Intro title="Nos services" content={content} />
        <Services title="Ce service comprend" services={service?.services} />
        <MeetUp />
        <More />
        <Contact />
      </section>
    </Layout>
  );
}

export function Head(props: HeadProps<ServicePageData>) {
  const { data } = props;
  return (
    <>
      <title>{data.service.name}</title>
      <meta name="description" content={data.service.description} />
    </>
  );
}

export const query = graphql`
  query ($id: String!, $cover: String!) {
    service: contentfulService(id: { eq: $id }) {
      id
      name
      description
      content {
        raw
      }
      services
    }
    mobileHero: contentfulAsset(id: { eq: $cover }) {
      gatsbyImageData(
        width: 768
        height: 1000
        quality: 60
        resizingBehavior: FILL
      )
    }
    desktopHero: contentfulAsset(id: { eq: $cover }) {
      gatsbyImageData(
        width: 1440
        height: 800
        quality: 60
        cropFocus: TOP
        resizingBehavior: FILL
      )
    }
  }
`;

export default ServicePage;
