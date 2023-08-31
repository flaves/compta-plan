import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface ArticleType {
  id: string;
  seoTitle: string;
  seoDescription: string;
  name: string;
  description: string;
  slug: string;
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  updatedAt: string;
  cover: {
    gatsbyImageData: IGatsbyImageData;
  };
  category?: {
    id: string;
    name: string;
  };
}

export default ArticleType;
