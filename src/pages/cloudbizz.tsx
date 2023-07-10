import React from 'react';
import Layout from '../components/layout';
import { HeadProps } from 'gatsby';

function CloudbizzPage() {
  return (
    <Layout>
      <section style={{ height: `100vh` }}>
        <iframe
          src="https://portal.cloudbizz.com/"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
        />
      </section>
    </Layout>
  );
}

export function Head(props: HeadProps) {
  const {} = props;
  return (
    <>
      <title>Cloudbizz</title>
      <meta name="description" content="Cloudbizz" />
      <meta name="robots" content="noindex,nofollow" />
    </>
  );
}

export default CloudbizzPage;
