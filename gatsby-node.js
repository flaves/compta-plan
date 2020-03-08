const path = require(`path`);

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const offerTemplate = path.resolve(`src/templates/offer.tsx`);
  const serviceTemplate = path.resolve(`src/templates/service.tsx`);

  const offers = await graphql(`
    {
      allContentfulOffer {
        edges {
          node {
            id
            slug
            cover {
              id
            }
          }
        }
      }
    }
  `);

  offers.data.allContentfulOffer.edges.forEach(({ node }) => {
    createPage({
      path: `/nos-offres/${node.slug}`,
      component: offerTemplate,
      context: {
        id: node.id,
        cover: node.cover.id,
      },
    });
  });

  const services = await graphql(`
    {
      allContentfulService {
        edges {
          node {
            id
            slug
            cover {
              id
            }
          }
        }
      }
    }
  `);

  services.data.allContentfulService.edges.forEach(({ node }) => {
    createPage({
      path: `/nos-services/${node.slug}`,
      component: serviceTemplate,
      context: {
        id: node.id,
        cover: node.cover.id,
      },
    });
  });

  return;
};
