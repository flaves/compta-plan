require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Flaves`,
    description: `Gatsby starter for personal project.`,
    author: `@flaves`,
    siteUrl: `https://www.example.com`,
    mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-opeah`,
        short_name: `opeah`,
        start_url: `/`,
        background_color: `#0F111A`,
        theme_color: `#0F111A`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`default`, `es2015`, `es2016`, `es2017`, `es2018`],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 70,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `n7jonmrvv2j0`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
