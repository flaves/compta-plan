import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { graphql, useStaticQuery } from 'gatsby';
import { animated as a, useSprings } from 'react-spring';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerCheck } from '@fortawesome/pro-solid-svg-icons';

import mq from '../../styles/mq';

import { ThemeType } from '../../styles/theme';
import AddressType from '../../types/address';

interface ViewportProps {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
}

interface AddressProps {
  current: string;
}

const Address: React.FC<AddressProps> = ({ current }) => {
  const { color, fontWeight } = useTheme<ThemeType>();
  const [viewport, setViewport] = useState<ViewportProps>({
    width: `100%`,
    height: `100%`,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const {
    allContentfulAddress,
    site: {
      siteMetadata: { mapboxAccessToken },
    },
  } = useStaticQuery(query);
  const [marker, setMarker] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 0,
    longitude: 0,
  });

  const addresses: AddressType[] = allContentfulAddress?.edges?.map(
    (item: { node: any }) => item?.node
  );

  const fade = useSprings(
    addresses?.length,
    addresses?.map(item => ({
      opacity: item?.id === current ? 1 : 0,
      position: `absolute`,
    }))
  );

  useEffect(() => {
    const address = addresses?.find(address => address?.id === current);

    setMarker({
      latitude: address?.position?.lat || 0,
      longitude: address?.position?.lon || 0,
    });
    setViewport({
      ...viewport,
      latitude: address?.position?.lat || 0,
      longitude: address?.position?.lon || 0,
    });
  }, [current]);

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
          background-color: black;
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
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={mapboxAccessToken}
          onViewportChange={(viewport: ViewportProps) => setViewport(viewport)}
        >
          <Marker longitude={marker?.longitude} latitude={marker?.latitude}>
            <FontAwesomeIcon
              icon={faMapMarkerCheck}
              size="3x"
              color={color.primary}
            />
          </Marker>
        </ReactMapGL>
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
                {item?.name}
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
                {item?.zip} {item?.city}
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

const query = graphql`
  {
    site {
      siteMetadata {
        mapboxAccessToken
      }
    }
    allContentfulAddress {
      edges {
        node {
          id
          name
          position {
            lat
            lon
          }
          street
          zip
          city
          phone
        }
      }
    }
  }
`;

export default Address;
