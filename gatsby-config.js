/**
 * @type {import('gatsby').GatsbyConfig}
 */
const yaml = require('js-yaml');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://poems.wanderersnook.co.uk/',
    title: 'The Wanderers Nook',
    author: 'Ellie McDonald',
    description: 'Poems for those who love the outdoors.',
    image: './static/logos/Logo.png', 
    siteSearch: 'nositelinkssearchbox',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    `gatsby-plugin-decap-cms`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Wanderer\'s Nook',
        short_name: `The Nook`,
        start_url: `/`,
        background_color: `#5e5c3b`,
        theme_color: `#868254`,
        icon: "static/logos/favicon-32.png",
        display: `standalone`,
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        rule: {
          include: /static/
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `poems`,
        path: `${__dirname}/content/poems`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
}
