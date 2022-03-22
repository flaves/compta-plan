import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

interface ArticleImageProps {
  fileName: string;
}

const ArticleImage: React.FC<ArticleImageProps> = ({ fileName }) => {
  const { allContentfulAsset } = useStaticQuery(query);

  const match = allContentfulAsset?.edges?.find(
    (item: { node: any }) => item?.node?.file?.fileName === fileName
  );

  if (!match) {
    return <div />;
  }

  return <GatsbyImage image={match?.gatsbyImageData} />;
};

const query = graphql`
  {
    allContentfulAsset {
      edges {
        node {
          gatsbyImageData(
              quality: 100
              width: 800
              height: 300
              cropFocus: CENTER
              resizingBehavior: FILL
            )
          file {
            fileName
          }
        }
      }
    }
  }
`;

export default ArticleImage;
