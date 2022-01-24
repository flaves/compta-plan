import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import mq from '../../styles/mq';

const LS_KEY = `cp.has_dismissed_alert`;

export const Banner = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onClick = () => {
    localStorage.setItem(LS_KEY, `true`);
    setIsVisible(false);
  };

  useEffect(() => {
    const key = localStorage.getItem(LS_KEY);
    const hasDismissedAlert = !!key;
    if (!hasDismissedAlert) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return <></>;

  return (
    <section
      css={css`
        background: black;
        color: white;
        padding: 20px;
        text-align: center;
        position: fixed;
        bottom: 50px;
        z-index: 9999;
        border-radius: 10px;
        left: 10px;
        right: 10px;

        ${mq(`md`)} {
          left: 50%;
          transform: translateX(-50%);
          right: auto;
        }
      `}
    >
      <p
        css={css`
          margin-bottom: 20px;

          a {
            color: white;
            text-decoration: underline;
          }
        `}
      >
        Nous avons changé de plateforme pour déposer vos documents.
        <br />
        Veuillez <Link to="/contact">nous contacter</Link> pour plus
        d'informations.
      </p>
      <button
        onClick={onClick}
        css={css`
          appearance: none;
          background: transparent;
          color: white;
          border: 0;
          cursor: pointer;
          text-decoration: underline;
        `}
      >
        Fermer cette alerte
      </button>
    </section>
  );
};
