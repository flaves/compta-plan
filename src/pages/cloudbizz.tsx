import React from 'react';

import Layout from '../components/layout';

const CloudBizz = () => {
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
};

export default CloudBizz;
