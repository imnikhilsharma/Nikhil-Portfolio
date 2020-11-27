require('dotenv').config({
path: '.env',
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: 'Nikhil Sharma - Professional Web App Auditer',
  },
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-cara',
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Cara - @lekoarts/gatsby-theme-cara',
        short_name: 'Cara',
        description: 'Looking for Tachnical SEO Auditor that help to boost your presence on Google Search Engine. Get In touch with me at:+91-9588066361',
        start_url: 'https://nikhilsharmaseo.netlify.app/',
        background_color: '#141821',
        theme_color: '#f6ad55',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    shouldAnalyseBundle && {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        reportFilename: '_bundle.html',
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
module.exports = {
  siteMetadata: {
    title: "Severus Snape",
    titleTemplate: "%s · The Real Hero",
    description:
      "Looking for Tachnical SEO Auditor that help to boost your presence Google Search Engine. Get In touch with met at:+91-9588066361",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
}
