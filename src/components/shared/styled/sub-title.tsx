import styled from '@emotion/styled';

import mq from '../../../styles/mq';

const SubTitle = styled.p`
  color: #a9a9a9;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-bottom: 50px;

  ${mq(`md`)} {
    font-size: 16px;
    margin: 0 auto 70px auto;
    max-width: 650px;
  }
`;

export default SubTitle;
