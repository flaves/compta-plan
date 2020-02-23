import React, { useCallback } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import mq from '../../styles/mq';

import H2 from '../shared/heading/h2';

import { ThemeType } from '../../styles/theme';

const services: string[] = [
  `Controle fiscal`,
  `Assistance control fiscal`,
  `Maitrise des couts`,
  `Optimisation fiscale`,
  `Droits d’auteurs`,
  `Rémunération optimisée`,
];

const Services: React.FC = () => {
  const { color, fontWeight } = useTheme<ThemeType>();

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
        {services?.map(service => (
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
        Ce service comprend
      </H2>
      {renderServices()}
    </section>
  );
};

export default React.memo(Services);
