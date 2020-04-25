/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
      title: 'Rocketseat',
      description: 'Novo blog da Rocketseat',
      author: '@joaopedro_cc',
      siteUrl: 'https://joaopedro.cc',
      disqusShortname: 'blog-do-joao-pedro',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
    ]
  }