const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Century\'s world',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
          }
        }]
      }
    },
    'gatsby-plugin-less',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: path.resolve(__dirname, './docs'),
      }
    },
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Century's World`,
        short_name: `guoshencheng`,
        start_url: `/`,
        background_color: `#52a260`,
        theme_color: `#52a260`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
  ],
}
