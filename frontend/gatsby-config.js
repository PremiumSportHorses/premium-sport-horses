require('dotenv').config({
  path: `.env`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi-fixed',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        contentTypes: ['horse'],
        singleTypes: ['about-us', 'our-partners', 'global-settings'],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: `src/images/icon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
