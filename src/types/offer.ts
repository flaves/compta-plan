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
    fluid: any;
  };
  internal: {
    type: string;
  };
}

export default OfferType;
