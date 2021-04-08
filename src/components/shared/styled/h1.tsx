import styled from '@emotion/styled';

import mq from '../../../styles/mq';

const H1 = styled.h1`
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
