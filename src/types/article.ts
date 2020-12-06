interface ArticleType {
  id: string;
  name: string;
  description: string;
  slug: string;
  content: {
    raw: any;
  };
  cover: {
    fluid: any;
  };
}

export default ArticleType;
