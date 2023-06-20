import React from 'react';
import { css, useTheme } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { animated as a, useTrail } from 'react-spring';

import mq from '../../styles/mq';

import AddressType from '../../types/address';

interface TabsProps {
  current: string;
  setCurrent: Function;
}

const Tabs: React.FC<TabsProps> = ({ current, setCurrent }) => {
  const { color, fontWeight } = useTheme();
  const { allContentfulAddress } = useStaticQuery(query);
  const addresses: AddressType[] = allContentfulAddress?.edges?.map(
    (item: { node: any }) => item?.node
  );
  const trail = useTrail(addresses?.length, {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      mass: 1,
      tension: 150,
      friction: 35,
    },
  });

  const renderTabs = () => (
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;

        ${mq(`md`)} {
          flex-wrap: initial;
          justify-content: space-between;
          align-items: center;
        }
      `}
    >
      {trail?.map((props, key) => {
        const tab = addresses[key];

        return (
          <a.li
            key={key}
            css={css`
              color: ${current === tab?.id ? color.primary : `#a9a9a9`};
              cursor: pointer;
              font-size: 20px;
              font-weight: ${fontWeight.semiBold};
              transition: color 0.3s;
              flex: 0 0 50%;
              max-width: 50%;
              margin-bottom: 20px;
              text-align: center;

              ${mq(`md`)} {
                flex: initial;
                max-width: initial;
                margin-bottom: 0;
                text-align: initial;
              }
            `}
            style={props}
            onClick={() => setCurrent(tab?.id)}
          >
            {tab?.name}
          </a.li>
        );
      })}
    </ul>
  );

  return (
    <section
      css={css`
        padding: 50px 25px;

        ${mq(`md`)} {
          padding: 50px 100px;
        }
      `}
    >
      {renderTabs()}
    </section>
  );
};

const query = graphql`
  {
    allContentfulAddress(sort: { name: ASC }) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;

export default Tabs;
