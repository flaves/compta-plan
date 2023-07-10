import React from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { ContentfulPage } from '../types/contentful';

type ErrorPageData = {
  contentfulPage: ContentfulPage;
};

type ErrorPageProps = PageProps<ErrorPageData>;

function ErrorPage(props: ErrorPageProps) {
  const {} = props;
  return (
    <Layout>
      <h1>Page introuvable</h1>
    </Layout>
  );
}

export function Head(props: HeadProps<ErrorPageData>) {
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
    contentfulPage(slug: { eq: "404" }) {
      id
      seo_title
      seo_description
    }
  }
`;

export default ErrorPage;
