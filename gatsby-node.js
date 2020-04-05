/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const _ = require('lodash')


// 动态的创建文章详情页
// Create article detail pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
        allPosts(filter: {status: {eq: "published"}}) {
            nodes {
              slug
              tags
            }
        }
    }
  `)
  
  const posts = result.data.allPosts.nodes;
  
  posts.forEach(({ slug }) => {
    createPage({
      path: `posts/${slug}`,
      component: path.resolve(`./src/templates/BlogPost.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: slug,
      },
    })
  })

  let tags = [];

  _.each(posts,item =>{
    if(_.get(item,"tags")){
      tags = tags.concat(item.tags)
    }
  })

  tags = _.uniq(tags)

  tags.forEach(tag =>{
    createPage({
      path: `/${_.kebabCase(tag)}/`,
      component: path.resolve("src/templates/BlogTag.js"),
      context:{
        tag
      }
    })
  })

}
