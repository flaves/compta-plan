import styled from '@emotion/styled';

import mq from '../../../styles/mq';

const Container = styled.div`
  padding: 40px;

  ${mq(`md`)} {
    padding: 70px 100px;
  }
`;

export default Container;
