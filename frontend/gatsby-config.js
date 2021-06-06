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
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'https://premium-sport-horses.herokuapp.com',
        contentTypes: ['horse', 'breeding-horse'],
        singleTypes: ['about-us', 'our-partners', 'global-settings', 'trainings', 'recreation', 'contact'],
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
        icon: `src/images/logo-small.jpeg`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
