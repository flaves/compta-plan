import styled from '@emotion/styled';

import mq from '../../../styles/mq';

import { ThemeType } from '../../../styles/theme';

interface H2Props {
  theme?: ThemeType;
}

const H2 = styled.h2<H2Props>`
  color: ${({ theme }) => theme.color.heading};
  margin-bottom: 10px;
  font-size: 24px;

  ${mq(`md`)} {
    font-size: 48px;
  }
`;

export default H2;
