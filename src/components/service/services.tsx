import React, { useCallback } from 'react';
import { css, useTheme } from '@emotion/react';

import mq from '../../styles/mq';

import Container from '../shared/styled/container';

interface ServicesProps {
  title: string;
  services: string[];
}

const Services: React.FC<ServicesProps> = ({ title, services }) => {
  const { fontWeight } = useTheme();

  const renderServices = useCallback(
    (services: string[]) => (
      <ul
        css={css`
          ${mq(`md`)} {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -2rem;
          }
        `}
      >
        {services?.map((service) => (
          <li
            key={service}
            css={css`
              color: #a9a9a9;
              font-size: 18px;
              font-weight: ${fontWeight.medium};
              margin-bottom: 20px;

              ${mq(`md`)} {
                flex: 0 0 33.3333333%;
                max-width: 33.3333333%;
                padding: 0 2rem;
              }
            `}
          >
            {service}
          </li>
        ))}
      </ul>
    ),
    [fontWeight.medium]
  );

  return (
    <section
      css={css`
        background-color: #f5f5f5;
      `}
    >
      <Container>
        {/*        <H2
          css={css`
            margin-bottom: 50px;
          `}
        >
          {title}
        </H2>*/}
        {renderServices(services)}
      </Container>
    </section>
  );
};

export default Services;
