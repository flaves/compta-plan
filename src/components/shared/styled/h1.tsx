import styled from '@emotion/styled';

import mq from '../../../styles/mq';

import { ThemeType } from '../../../styles/theme';

interface H1Props {
  theme?: ThemeType;
}

const H1 = styled.h1<H1Props>`
  color: ${({ theme }) => theme.color.white};
  font-size: 30px;

  & + p {
    margin-top: 15px;
  }

  ${mq(`md`)} {
    font-size: 60px;
  }
`;

export default H1;
