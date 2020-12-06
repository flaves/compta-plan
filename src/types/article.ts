import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text';

interface ArticleType {
  id: string;
  name: string;
  description: string;
  slug: string;
  content: RenderRichTextData<ContentfulRichTextGatsbyReference>;
  cover: {
    fluid: any;
  };
}

export default ArticleType;
