import { graphql, useStaticQuery } from 'gatsby';

import { LinkType } from '../components/layout/header';
import ServiceType from '../types/service';
import OfferType from '../types/offer';

const useGetNavLinks = () => {
  const { allContentfulOffer, allContentfulService } = useStaticQuery(query);

  const offers: LinkType[] = allContentfulOffer?.edges
    ?.map((item: { node: OfferType }) => item?.node)
    ?.map((link: OfferType) => ({
      label: link?.name,
      path: `/nos-offres/${link?.slug}`,
    }));

  const services: LinkType[] = allContentfulService?.edges
    ?.map((item: { node: ServiceType }) => item?.node)
    ?.map((link: ServiceType) => ({
      label: link?.name,
      path: `/nos-services/${link?.slug}`,
    }));

  const links: LinkType[] = [
    {
      label: `Nos Solutions`,
      path: `/nos-solutions`,
      dropdown: [
        {
          label: `My ComptaPlan`,
          path: `/nos-solutions/my-comptaplan`,
        },
        {
          label: `Primes & Subsides`,
          path: `/nos-solutions/primes-subsides`,
        },
      ],
    },
    {
      label: `Nos Offres`,
      path: `/nos-offres`,
      dropdown: offers,
    },
    {
      label: `Nos Services`,
      path: `/nos-services`,
      dropdown: services,
    },
    {
      label: `Blog`,
      path: `/blog`,
    },
    {
      label: `Contact`,
      path: `/contact`,
    },
  ];

  return links;
};

const query = graphql`
  {
    allContentfulOffer {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
    allContentfulService {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

export default useGetNavLinks;
