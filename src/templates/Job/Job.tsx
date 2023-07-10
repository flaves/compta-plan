import React from 'react';
import { graphql, HeadProps } from 'gatsby';
import Layout from '../../components/layout';
import MeetUp from '../../components/shared/meet-up';
import Contact from '../../components/shared/contact';
import { JobHero } from './JobHero';
import { JobIntro } from './JobDescription';
import { JobType } from '../../types';

type JobPageData = {
  job: JobType;
  mobileHero: any;
  desktopHero: any;
};

type JobPageProps = {
  data: JobPageData;
};

function JobPage(props: JobPageProps) {
  const { data } = props;
  const { job } = data;
  const { content, date } = job;
  const file = job.file.file.url;
  return (
    <Layout>
      <section>
        <JobHero title={job.title} />
        <JobIntro content={content} file={file} date={date} />
        <MeetUp />
        <Contact />
      </section>
    </Layout>
  );
}

export function Head(props: HeadProps<JobPageData>) {
  const { data } = props;
  return (
    <>
      <title>{data.job.title}</title>
      <meta name="description" content={data.job.description.description} />
    </>
  );
}

export const query = graphql`
  query ($id: String!) {
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

export default JobPage;
