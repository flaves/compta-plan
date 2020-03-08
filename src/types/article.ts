interface ArticleType {
  id: string;
  name: string;
  description: string;
  slug: string;
  content: {
    json: any;
  };
  cover: {
    fluid: any;
  };
}

export default ArticleType;
