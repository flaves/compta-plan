import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import mq from '../../styles/mq';

const LS_KEY = `cp.has_accepted_cookie`;

export const CookiesBanner = (): JSX.Element => {
  const { privacyPdf } = useStaticQuery(query);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onClick = () => {
    localStorage.setItem(LS_KEY, `true`);
    setIsVisible(false);
  };

  useEffect(() => {
    const key = localStorage.getItem(LS_KEY);
    const hasAcceptedCookie = !!key;
    if (!hasAcceptedCookie) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return <></>;

  return (
    <div
      css={css`
        position: fixed;
        left: 10px;
        right: 10px;
        bottom: 50px;
        background: black;
        padding: 20px;
        border-radius: 10px;
        z-index: 1001;

        ${mq(`md`)} {
          left: 50px;
          right: auto;
        }
      `}
    >
      <p
        css={css`
          color: white;
          display: flex;
          align-items: center;
          flex-direction: column;

          ${mq(`md`)} {
            flex-direction: row;
          }

          & > span {
            font-size: 24px;
            margin-right: 10px;
          }

          a {
            color: white;
            margin-left: 3px;
            text-decoration: underline;
          }
        `}
      >
        <span>🍪</span> Ce site utilise des cookies.{' '}
        <a href={privacyPdf.file.url} target="_blank" rel="noopener noreferrer">
          En savoir plus.
        </a>
        <button
          onClick={onClick}
          css={css`
            appearance: none;
            background: transparent;
            padding-top: 3px;
            border: 0;
            cursor: pointer;

            ${mq(`md`)} {
              margin-left: 20px;
            }
          `}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" color="white" />
        </button>
      </p>
    </div>
  );
};

const query = graphql`
  {
    privacyPdf: contentfulAsset(title: { eq: "Privacy" }) {
      id
      title
      file {
        url
      }
    }
  }
`;
