import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { animated as a, useSprings } from 'react-spring';

import mq from '../../styles/mq';

import { ThemeType } from '../../styles/theme';

interface AddressType {
  id: number;
  title: string;
  street: string;
  city: string;
  phone: string;
  value: string;
}

const addresses: AddressType[] = [
  {
    id: 0,
    title: `Brabant Wallon`,
    street: `Avenue de la Fontaine 4`,
    city: `BE-1435 Mont-Saint-Guibert`,
    phone: `+32 10 65 07 76`,
    value: `bw`,
  },
  {
    id: 1,
    title: `Namur`,
    street: `Rue Comte Cornet, 19`,
    city: `BE-7020 Mons-Maisières`,
    phone: `+32 10 65 38 91`,
    value: `namur`,
  },
  {
    id: 2,
    title: `Hainaut`,
    street: `Rue Comte Cornet, 19`,
    city: `BE-7020 Mons-Maisières`,
    phone: `+32 10 65 38 91`,
    value: `hainaut`,
  },
  {
    id: 3,
    title: `Luxembourg`,
    street: `Wohlber, 11`,
    city: `LU-9638 Pommerloch`,
    phone: `+352 691 854 003`,
    value: `lux`,
  },
];

interface AddressProps {
  current: string;
}

const Address: React.FC<AddressProps> = ({ current }) => {
  const { color, fontWeight } = useTheme<ThemeType>();
  const fade = useSprings(
    addresses?.length,
    addresses?.map(item => ({
      opacity: item?.value === current ? 1 : 0,
      position: `absolute`,
    }))
  );

  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;

        ${mq(`md`)} {
          flex-direction: row;
          min-height: 500px;
        }
      `}
    >
      <div
        css={css`
          min-height: 300px;
          background-color: red;
          order: 2;

          ${mq(`md`)} {
            flex: 0 0 50%;
            max-width: 50%;
            position: relative;
            z-index: 2;
            order: 1;
          }
        `}
      >
        Map
      </div>
      <div
        css={css`
          position: relative;
          min-height: 245px;
          text-align: center;
          order: 1;

          ${mq(`md`)} {
            flex: 0 0 50%;
            max-width: 50%;
            min-height: 400px;
            padding-top: 50px;
            padding-left: 80px;
            text-align: initial;
            order: 2;
          }
        `}
      >
        {fade?.map((props, key) => {
          const item = addresses[key];

          return (
            <a.div
              key={key}
              style={props}
              css={css`
                padding: 50px 0;
                width: 100%;

                ${mq(`md`)} {
                  width: auto;
                }
              `}
            >
              <h2
                css={css`
                  color: ${color.black};
                  font-size: 20px;
                  font-weight: ${fontWeight.semiBold};
                  margin-bottom: 30px;

                  ${mq(`md`)} {
                    font-size: 36px;
                  }
                `}
              >
                {item?.title}
              </h2>
              <address
                css={css`
                  color: #a9a9a9;
                  font-size: 16px;
                  font-weight: ${fontWeight.semiBold};
                `}
              >
                {item?.street}
                <br />
                {item?.city}
                <br />
                <br />
                {item?.phone}
              </address>
            </a.div>
          );
        })}
      </div>
    </section>
  );
};

export default Address;
