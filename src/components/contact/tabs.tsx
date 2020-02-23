import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { animated as a, useTrail } from 'react-spring';

import { ThemeType } from '../../styles/theme';
import mq from '../../styles/mq';

interface TabType {
  label: string;
  value: string;
}

const tabs: TabType[] = [
  {
    label: `Brabant Wallon`,
    value: `bw`,
  },
  {
    label: `Namur`,
    value: `namur`,
  },
  {
    label: `Hainaut`,
    value: `hainaut`,
  },
  {
    label: `Luxembourg`,
    value: `lux`,
  },
];

interface TabsProps {
  current: string;
  setCurrent: Function;
}

const Tabs: React.FC<TabsProps> = ({ current, setCurrent }) => {
  const { color, fontWeight } = useTheme<ThemeType>();
  const trail = useTrail(tabs?.length, {
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
        const tab = tabs[key];

        return (
          <a.li
            key={key}
            css={css`
              color: ${current === tab?.value ? color.primary : `#a9a9a9`};
              cursor: pointer;
              font-size: 24px;
              font-weight: ${fontWeight.semiBold};
              transition: color 0.3s;
            `}
            style={props}
            onClick={() => setCurrent(tab?.value)}
          >
            {tab?.label}
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

export default Tabs;
