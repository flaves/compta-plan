import { IGatsbyImageData } from 'gatsby-plugin-image';

interface ServiceType {
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

export default ServiceType;
