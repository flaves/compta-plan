import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import SEO from '../../components/helpers/seo';
import MeetUp from '../../components/shared/meet-up';
import Contact from '../../components/shared/contact';

import { JobHero } from './JobHero';
import { JobIntro } from './JobDescription';

import { JobType } from '../../types';

interface ServicesProps {
  data: {
    job: JobType;
    mobileHero: any;
    desktopHero: any;
  };
}

const Job = ({ data: { job } }: ServicesProps): JSX.Element => {
  const { content, date } = job;

  const file = job.file.file.url;

  return (
    <Layout>
      <SEO title={job.title} description={job.title} />
      <section>
        <JobHero title={job.title} />
        <JobIntro content={content} file={file} date={date} />
        <MeetUp />
        <Contact />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    job: contentfulJobs(id: { eq: $id }) {
      id
      date
      title
      content {
        raw
      }
      file {
        file {
          url
        }
      }
    }
  }
`;

export default Job;
