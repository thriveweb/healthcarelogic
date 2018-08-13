const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.healthcarelogic.com',
    title: 'Healthcare Logic',
    email: 'info@healthcarelogic.com.au',
    phone: '',
    address: 'Level 6, 64 Marine Parade, Southport, QLD, 4215'
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Healthcare Logic',
        short_name: 'Healthcare',
        start_url: '/',
        background_color: '#47b7e8',
        theme_color: '#47b7e8',
        display: 'standalone',
        icon: 'static/logo.png' // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        stylesPath: `${__dirname}/src/cms/admin.css`,
        enableIdentityWidget: true
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
}
