const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  siteMetadata: {
    title: 'Healthcare Logic',
  },
  plugins: [
    'gatsby-plugin-react-helmet', // css
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [postcssPresetEnv()],
      },
    },
  ],
}
