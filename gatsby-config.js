const contentful = require('contentful');
const manifestConfig = require('./manifest-config');
require('dotenv').config();

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID } = process.env;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

const getAboutEntry = (entry) => entry.sys.contentType.sys.id === 'about';

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Cabin', 'Open Sans'],
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifestConfig,
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    },
  },
  'gatsby-transformer-remark',
  'gatsby-plugin-offline',
];

// module.exports = client.getEntries().then(entries => {
//   const { mediumUser } = entries.items.find(getAboutEntry).fields;

//   /* plugins.push({
//     resolve: 'gatsby-source-medium',
//     options: {
//       username: mediumUser || '@medium',
//     },
//   }); */

//   if (ANALYTICS_ID) {
//     plugins.push({
//       resolve: 'gatsby-plugin-google-analytics',
//       options: {
//         trackingId: ANALYTICS_ID,
//       },
//     });
//   }

//   return {
//     siteMetadata: {
//       isMediumUserDefined: !!mediumUser,
//     },
//     plugins,
//   };
// });

const contentfulConfig = {
  spaceId: SPACE_ID,
  accessToken: ACCESS_TOKEN,
};

module.exports = {
  siteMetadata: {
    title: 'Gatsby Contentful Starter',
    description: 'Official Contentful Gatsby Starter',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `limelight`,
    //       `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
    //     ],
    //     display: 'swap',
    //   },
    // },
  ],
};
