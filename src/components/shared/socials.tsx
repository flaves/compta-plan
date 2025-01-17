import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { Link } from 'gatsby-link';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface StaticQuery {
  [key: string]: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const SocialsContainer = styled.div`
  margin-top: 15px;
`;

const Icon = styled(GatsbyImage)`
  width: 17px;
  height: 17px;
  margin-right: 20px;
  cursor: pointer;
`;

const Socials: React.FC = ({}) => {
  const icons = useStaticQuery<StaticQuery>(query);

  const socials = [
    {
      icon: icons?.facebook?.childImageSharp?.gatsbyImageData,
      alt: 'Facebook icon',
      link: 'https://fr-fr.facebook.com/comptaplan/',
    },
    {
      icon: icons?.instagram?.childImageSharp?.gatsbyImageData,
      alt: 'Instagram icon',
      link: 'https://www.instagram.com/comptaplan/',
    },
    {
      icon: icons?.linkedin?.childImageSharp?.gatsbyImageData,
      alt: 'Linkedin icon',
      link: 'https://be.linkedin.com/company/compta-plan/',
    },
  ];
  return (
    <SocialsContainer>
      {socials?.map((social, key) => (
        <Link
          key={key}
          to={social?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon image={social?.icon} alt={social?.alt} />
        </Link>
      ))}
    </SocialsContainer>
  );
};

export default Socials;

export const query = graphql`
  query MyQuery {
    facebook: file(relativePath: { eq: "socials/facebook-icon.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    instagram: file(relativePath: { eq: "socials/instagram-icon.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    linkedin: file(relativePath: { eq: "socials/linkedin-icon.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
