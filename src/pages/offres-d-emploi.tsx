import React from 'react';
import { graphql, Link } from 'gatsby';
import dayjs from 'dayjs';

import Layout from '../components/layout';
import SEO from '../components/helpers/seo';

import Container from '../components/shared/styled/container';

import { JobType } from '../types';
import { css } from '@emotion/react';
import { JobsHero } from '../components/jobs/JobsHero';

export interface Props {
  data: {
    jobs: {
      edges: {
        node: JobType;
      }[];
    };
  };
}

const Jobs = (props: Props): JSX.Element => {
  const jobs = props.data.jobs.edges.map((job) => job.node);

  const renderJobs = jobs.map((job) => (
    <li
      key={job.id}
      css={css`
        margin-bottom: 12px;
      `}
    >
      <Link to={`/offres-d-emploi/${job.slug}`}>
        <article
          css={css`
            background: #edf2f7;
            border-radius: 20px;
            padding: 20px;
          `}
        >
          <h3>{job.title}</h3>
          <p>{job.description.description}</p>
          <small>{dayjs(job.date).format(`DD/MM/YYYY`)}</small>
        </article>
      </Link>
    </li>
  ));

  return (
    <Layout>
      <SEO title="Offres d'emploi" />
      <section>
        <Container>
          <JobsHero />
          {jobs.length <= 0 ? (
            <h2
              css={css`
                text-align: center;
              `}
            >
              Pas d'offre d'emploi pour le moment
            </h2>
          ) : (
            <ul>{renderJobs}</ul>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    jobs: allContentfulJobs {
      edges {
        node {
          id
          slug
          date
          title
          description {
            description
          }
        }
      }
    }
  }
`;

export default Jobs;
