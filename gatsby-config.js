require('dotenv').config({
path: '.env',
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/edit/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitleAlt: 'Nikhil Sharma - Professional Web App Auditer | Web Optimization Specialist | SEO',
    siteDescription: `Looking for Tachnical SEO Auditor that help to boost your presence on Google Search Engine. Get In touch with me at:+91-9588066361`,
  },
  plugins: ['gatsby-plugin-react-helmet'],
  plugins: [
    {
      resolve: '@lekoarts/gatsby-theme-cara',
      // See the theme's README for all available options
      options: {},
    },
    {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl:'https://nikhilsharma.gtsb.io/',
    }
    }, 
    {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      sitemapSize: 5000
    }
  },
    {
    resolve: "gatsby-plugin-google-tagmanager",
    options: {
      id: "GTM-NFNWS2N",
    }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-183916754-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Cara - @lekoarts/gatsby-theme-cara',
        short_name: 'Nikhil Sharma Portfolio',
        description: 'Looking for Tachnical SEO Auditor that help to boost your presence on Google Search Engine. Get In touch with me at:+91-9588066361',
        start_url: 'https://nikhil-sharma.netlify.app/',
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
    'shouldAnalyseBundle' && {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        reportFilename: '_bundle.html',
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
