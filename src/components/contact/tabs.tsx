import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';
import { animated as a, useTrail } from 'react-spring';

import mq from '../../styles/mq';

import { ThemeType } from '../../styles/theme';
import AddressType from '../../types/address';

interface TabsProps {
  current: string;
  setCurrent: Function;
}

const Tabs: React.FC<TabsProps> = ({ current, setCurrent }) => {
  const { color, fontWeight } = useTheme<ThemeType>();
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
        ${mq(`md`)} {
          display: flex;
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
        padding: 50px 100px;
      `}
    >
      {renderTabs()}
    </section>
  );
};

const query = graphql`
  {
    allContentfulAddress(sort: { fields: name, order: ASC }) {
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
