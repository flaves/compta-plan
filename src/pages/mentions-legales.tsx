import React from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout';
import Container from '../components/shared/styled/container';
import H1 from '../components/shared/styled/h1';
import styled from '@emotion/styled';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { ContentfulPage } from '../types/contentful';

const H3 = styled.h3`
  font-size: 20px;
`;

const Block = styled.div`
  margin-bottom: 20px;
`;
type LegalPageData = {
  contentfulPage: ContentfulPage;
};

type LegalPageProps = PageProps<LegalPageData>;

function LegalPage(props: LegalPageProps) {
  const {} = props;
  return (
    <Layout>
      <section
        css={css`
          padding-top: 50px;
          padding-bottom: 50px;
        `}
      >
        <Container>
          <section
            css={css`
              margin-bottom: 50px;
            `}
          >
            <H1
              css={css`
                color: black;
                text-align: center;
              `}
            >
              Mentions légales
            </H1>
          </section>
          <section>
            <Block>
              <H3>Nom de la société</H3>
              <p>Compta Plan</p>
            </Block>
            <Block>
              <H3>Forme juridique</H3>
              <p>SCRL</p>
            </Block>
            <Block>
              <H3>Siège social</H3>
              <p>Avenue de la Fontaine 4</p>
              <p>1435 Mont-Saint-Guibert</p>
            </Block>
            <Block>
              <H3>Adresse e-mail</H3>
              <p>info@comptaplan.be</p>
            </Block>
            <Block>
              <H3>Numéro de téléphone</H3>
              <p>+32 10 65 07 76</p>
            </Block>
            <Block>
              <H3>Numéro d'entreprise</H3>
              <p>0460.365.463</p>
            </Block>
            <Block>
              <H3>Numéro de TVA</H3>
              <p>BE0460365463</p>
            </Block>
          </section>
        </Container>
      </section>
    </Layout>
  );
}

export function Head(props: HeadProps<LegalPageData>) {
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
    contentfulPage(slug: { eq: "legal" }) {
      id
      seo_title
      seo_description
    }
  }
`;

export default LegalPage;
