export interface JobType {
  id: string;
  title: string;
  date: Date;
  slug: string;
  description: {
    description: string;
  };
  content: {
    raw: string;
    references: any;
  };
  file: {
    file: {
      url: string;
    };
  };
}
