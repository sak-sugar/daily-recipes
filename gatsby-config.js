/** @type {import('gatsby').GatsbyConfig} */

const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  // microCMS
  {
    resolve: "gatsby-source-microcms",
    options: {
      apiKey: process.env.API_KEY,
      serviceId: process.env.SERVICE_ID,
      apis: [
        {
          endpoint: "list",
        },
      ],
    },
  },
]
};