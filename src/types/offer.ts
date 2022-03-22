import { IGatsbyImageData } from 'gatsby-plugin-image';

interface OfferType {
  id: string;
  name: string;
  slug: string;
  description: string;
  content: {
    raw: string;
    references: any;
  };
  services: string[];
  cover: {
    gatsbyImageData: IGatsbyImageData;
  };
  internal: {
    type: string;
  };
}

export default OfferType;
