import React, { useCallback } from 'react';
import { css, useTheme } from '@emotion/react';

import mq from '../../styles/mq';

import H2 from './styled/h2';

interface ServicesProps {
  title: string;
  services: string[];
}

const Services: React.FC<ServicesProps> = ({ title, services }) => {
  const { fontWeight } = useTheme();

  const renderServices = useCallback(
    () => (
      <ul
        css={css`
          ${mq(`md`)} {
            display: flex;
            flex-wrap: wrap;
          }
        `}
      >
        {services?.map((service) => (
          <li
            css={css`
              color: #a9a9a9;
              font-size: 18px;
              font-weight: ${fontWeight.medium};
              margin-bottom: 20px;

              ${mq(`md`)} {
                flex: 0 0 33.3333333%;
                max-width: 33.3333333%;
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
      {renderServices()}
    </section>
  );
};

export default Services;
