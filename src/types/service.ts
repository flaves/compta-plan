interface ServiceType {
  id: string;
  name: string;
  slug: string;
  description: string;
  content: {
    raw: any;
  };
  services: string[];
  cover: {
    fluid: any;
  };
  internal: {
    type: string;
  };
}

export default ServiceType;
