import React, { useState } from 'react';
import { css } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { ThemeType } from '../../styles/theme';
import mq from '../../styles/mq';
import Container from '../shared/styled/container';

interface TabType {
  label: string;
}

const tabs: TabType[] = [
  {
    label: `Chèques entreprise`,
  },
  {
    label: `Soutien à l'emploi & primes à l'investissement`,
  },
];

const Bonus: React.FC = () => {
  return (
    <>
      <p
        css={css`
          margin-bottom: 20px;
        `}
      >
        Compta Plan est partenaire agréé du Service Public de Wallonie et peut
        vous aider via le dispositif Chèques-entreprises. Afin de soutenir la
        création d’activités, l’innovation, l’économie circulaire et la
        croissance des entreprises, le Service Public de Wallonie à mis
        dispositions une série d’aides au développement.
      </p>
      <p
        css={css`
          margin-bottom: 10px;
        `}
      >
        <b>Plusieurs chèques sont proposés :</b>
      </p>
      <ul
        css={css`
          list-style: initial;
          padding-left: 20px;

          li {
            margin-bottom: 10px;
          }
        `}
      >
        <li>
          Coaching à la création d’entreprise, 80% d’intervention, montant
          maximum de 15000 EUR sur 3 ans ;
        </li>
        <li>
          Diagnostic de cession ou de reprise d’une entreprise, 75%
          d’intervention, montant maximum de 7000 EUR ;
        </li>
        <li>
          Accompagnement cession ou reprise, 50% d’intervention, montant maximum
          de 15000 EUR sur 3 ans ;
        </li>
        <li>
          Consultance stratégique, conseil à la différenciation stratégique
          et/ou au développement commercial ;
        </li>
        <li>
          Diagnostic ; 50% d’intervention, montant maximum 25000 EUR sur 3 ans ;
        </li>
        <li>
          Accompagnement ; 50% d’intervention, montant maximum 90000 EUR sur 3
          ans.
        </li>
      </ul>
    </>
  );
};

const Jobs: React.FC = () => {
  return (
    <>
      <p
        css={css`
          margin-bottom: 20px;
        `}
      >
        Nous sommes également à vos côtés pour les aides à l’investissement
        ainsi que le soutien à l’emploi dans les secteurs d’activités marchands
        (SESAM).
      </p>
      <p
        css={css`
          margin-bottom: 10px;
        `}
      >
        <b>Prime à l’investissement</b>
      </p>
      <p
        css={css`
          margin-bottom: 20px;
        `}
      >
        Vous exercez une activité en personne physique ou en personne morale et
        vous souhaitez investir sur le territoire wallon. Si votre entreprise
        exerce une activité admise.
      </p>
      <p
        css={css`
          margin-bottom: 10px;
        `}
      >
        <b>Sesam</b>
      </p>
      <p>
        Vous souhaitez bénéficier d’un incitant financier pour l’engagement d’un
        demandeur d’emploi.
        <br />
        L’incitant financier « Sesam » a pour objectif de soutenir les petites
        entreprises qui engagent des demandeurs d’emplois inscrits auprès du
        Forem. Cet incitant se compose d’un montant forfaitaire dégressif sur 3
        ans. En outre, il peut être majoré d’un montant complémentaire et non
        dégressif (bonus) pour l’engagement d’emplois plus fragilisés sur le
        marché du travail et pour aider les entreprises à engager.
        Particulièrement pour les trois premiers engagements.
      </p>
    </>
  );
};

const Content: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const { color, fontWeight } = useTheme<ThemeType>();

  const renderTabs = (tabs: TabType[]) => (
    <ul
      css={css`
        margin-bottom: 50px;

        ${mq(`md`)} {
          display: flex;
          justify-content: space-around;
        }
      `}
    >
      {tabs?.map((tab, key) => (
        <li
          key={key}
          onClick={() => setCurrent(key)}
          css={css`
            color: ${current === key ? color.primary : `#888888`};
            cursor: pointer;
            font-size: 18px;
            font-weight: ${fontWeight.medium};
            transition: color 0.3s;
            margin-bottom: 20px;

            ${mq(`md`)} {
              margin-bottom: 0;
            }
          `}
        >
          {tab?.label}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      css={css`
        background-color: #f7f7f7;
      `}
    >
      <Container>
        {renderTabs(tabs)}
        {current === 0 ? <Bonus /> : <Jobs />}
      </Container>
    </section>
  );
};

export default React.memo(Content);
