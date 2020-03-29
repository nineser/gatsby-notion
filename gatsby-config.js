module.exports = {
  siteMetadata: {
    title: `9ser's Notion`,
    description: `build site with gatsby & notion`,
    author: `laijunjie`,
    quote: `成长，最遗憾的部分在于，总在最无知的年华，遇见最好的你，却不自知`
  },
  plugins: [
    {
      resolve: `gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/laijunjie/331fe8a222764f30b9ddbd446cd5433c?v=22bdc581dcce438e9b94483c55557a76',
            cacheType: 'html'
          }
        ]
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-notion`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
