interface ArticleType {
  id: string;
  name: string;
  slug: string;
  cover: {
    fluid: any;
  };
}

export default ArticleType;
