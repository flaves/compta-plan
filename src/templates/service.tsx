import React from 'react';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

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

interface ServicesProps {
  data: {
    service: ServiceType;
  };
}

const Service: React.FC<ServicesProps> = ({ data: { service } }) => {
  const content = service?.content?.json;

  return (
    <Layout>
      <section>
        <Hero background={service?.cover?.fluid}>
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
};

export const query = graphql`
  query($id: String!) {
    service: contentfulService(id: { eq: $id }) {
      id
      name
      description
      content {
        json
      }
      services
      cover {
        fluid(maxWidth: 1440, maxHeight: 800, quality: 70) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default React.memo(Service);
