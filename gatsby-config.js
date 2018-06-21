const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  siteMetadata: {
    title: 'Healthcare Logic',
    email: 'contact@healthcarelogic.com.au',
    phone: '0414 220 220',
    address: '1263 Mission Street, Floor 3, Brisbane 94103'
  },
  plugins: [
    'gatsby-plugin-react-helmet', // css
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [postcssPresetEnv()]
      }
    }
  ]
}
