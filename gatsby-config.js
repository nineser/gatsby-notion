module.exports = {
  siteMetadata: {
    title: `9ser's Notion`,
    description: `build with gatsby & notion`,
    author: `@9ser`,
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
        name: `9Ser's note`,
        short_name: `note`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/favicon.jpg`, 
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
