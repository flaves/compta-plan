import ArticleType from './article';

interface CategoryType {
  id: string;
  name: string;
  articles: ArticleType[];
}

export default CategoryType;
