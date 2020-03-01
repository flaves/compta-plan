import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import mq from '../../styles/mq';

import H2 from '../shared/styled/h2';

import { ThemeType } from '../../styles/theme';

interface ServicesProps {
  title: string;
  services: string[];
}

const Services: React.FC<ServicesProps> = ({ title, services }) => {
  const { fontWeight } = useTheme<ThemeType>();

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
        {services?.map(service => (
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
    []
  );

  return (
    <section
      css={css`
        background-color: #f5f5f5;
        padding: 75px 100px;
      `}
    >
      <H2
        css={css`
          margin-bottom: 50px;
        `}
      >
        {title}
      </H2>
      {renderServices(services)}
    </section>
  );
};

export default React.memo(Services);
