import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface ArticleType {
  id: string;
  name: string;
  description: string;
  slug: string;
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  cover: {
    gatsbyImageData: IGatsbyImageData;
  };
  category?: {
    id: string;
    name: string;
  }
}

export default ArticleType;
