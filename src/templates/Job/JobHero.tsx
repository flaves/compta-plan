import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import H1 from '../../components/shared/styled/h1';

export interface Props {
  title: ReactNode;
}

export const JobHero = (props: Props): JSX.Element => {
  return (
    <section
      css={css`
        padding: 150px 0 50px;
      `}
    >
      <H1
        css={css`
          color: black;
          text-align: center;
        `}
      >
        {props.title}
      </H1>
    </section>
  );
};
