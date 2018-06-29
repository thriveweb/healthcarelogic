const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.healthcarelogic.com.au',
    title: 'Healthcare Logic',
    email: 'info@healthcarelogic.com.au',
    phone: '',
    address: '1263 Mission Street, Floor 3, Brisbane 94103'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [postcssPresetEnv()]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `white`,
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    `gatsby-plugin-sitemap`
  ]
}
