import styled from '@emotion/styled';

import mq from '../../../styles/mq';

const H2 = styled.h2`
  color: ${({ theme }) => theme.color.heading};
  margin-bottom: 10px;
  font-size: 24px;

  ${mq(`lg`)} {
    font-size: 36px;
  }

  ${mq(`xl`)} {
    font-size: 48px;
  }
`;

export default H2;
