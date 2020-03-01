interface ServiceType {
  id: string;
  name: string;
  slug: string;
  description: string;
  content: {
    json: any;
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
