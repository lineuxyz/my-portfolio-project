/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
      title: 'Lineu Pastorelli',
      description: 'Esse é o portifolio de Lineu!',
      author: '@lineugrrrrr',
      siteUrl: 'https://lineupastorelli.com',
      disqusShortname: 'portifolio-do-lineu',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
    ]
  }