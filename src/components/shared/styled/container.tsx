import styled from '@emotion/styled';

import mq from '../../../styles/mq';

const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  ${mq(`sm`)} {
    max-width: 540px;
  }

  ${mq(`md`)} {
    max-width: 720px;
  }

  ${mq(`lg`)} {
    max-width: 960px;
  }

  ${mq(`xl`)} {
    max-width: 1140px;
  }
`;

export default Container;
