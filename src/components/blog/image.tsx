import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

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

  return <Img fluid={match?.node?.fluid} />;
};

const query = graphql`
  {
    allContentfulAsset {
      edges {
        node {
          fluid(
            quality: 100
            maxWidth: 800
            maxHeight: 300
            cropFocus: CENTER
            resizingBehavior: FILL
          ) {
            ...GatsbyContentfulFluid
          }
          file {
            fileName
          }
        }
      }
    }
  }
`;

export default ArticleImage;
