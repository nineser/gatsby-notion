import React from "react"
import { Link,graphql } from "gatsby"

import { css } from "@emotion/core"
import tw from "tailwind.macro"

import Layout from "../components/layout"
import TopBar from "../components/topBar"
import ShowCaseImg from "../components/imgCase"
import ListItem from "../components/ListItem"
import SEO from "../components/seo.js"

const container = css`
  padding-bottom: 0px;
  padding-left: calc((100% - 708px) / 2);
  padding-right: calc((100% - 708px) / 2);
`

const cardList= css`
  ${tw`flex flex-wrap -mx-2 overflow-hidden`};
  margin-top: 10px;
`;

const cardContainer = css`
  ${tw`w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2`};
  box-sizing: border-box;
  padding: .5rem;
`;

const card = css`
  user-select: none;
  transition: background 120ms ease-in 0s;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
`;

const titleContainer = css`
  display: block;
  color: inherit;
  text-decoration: none;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px;
  border-radius: 3px;
  background: white;
  overflow: hidden;
  transition: background 100ms ease-out 0s;
  position: static;
  height: 100%;
  padding: 8px 10px 10px;
`

const title = css`
  max-width: 100%;
  width: auto;
  white-space: nowrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  font-size: 14px;
  line-height: 1.5;
  min-height: 21px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  color: #000;
  margin-top: 0;
  margin-bottom: 0;
`

const postCover = css`
  display: block;
  object-fit: cover;
  border-radius: 1px 1px 0px 0px;
  width: 100%;
  height: 194.63px;
  object-position: center 50%;
`

const cateContainer = css`
  display: flex;
  align-items: center;
  height: 38px;
  padding-bottom: 2px;
  margin-bottom: 15px;
  margin-top: 48px;
  
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  font-size: 2.5em;
  font-weight: 600;
  line-height: 1.2;
  color: rgb(55, 53, 47);
`;


export default ({data}) => {

  const post = data.allPosts.edges;

  console.log(post);

    const Cards = post.map(( {node} ) => (
      <div key={node.title} css={cardContainer}>
        <Link to={'posts/'+node.slug}>
          <div css={card}>
            <div>
              <img alt="cover" src={node.cover} css={postCover}/>
            </div> 
            <div css={titleContainer}>
              <h4 css={title}>{node.title}</h4>
              <h4 css={title} style={{fontSize:`12px`,color:`rgba(55, 53, 47, 0.4)`}}>{node.publish_date}</h4>
            </div> 
          </div>
        </Link>
      </div>
    ));



  return (
    <Layout>
      <SEO title={post[0].node.tags[0]} />
      <header>
        <TopBar subLink={post[0].node.tags[0]}/>
        <ShowCaseImg/>
      </header>
      <main style={{padding:`20px`}}>
        <div css={container}>
          <div css={cateContainer}>
            #{post[0].node.tags[0]}
          </div>
          <div style={{margin:`0px`,padding: `4px 0 8px 0`,fontSize:`14px`,borderBottom:`1px solid rgba(55, 53, 47, 0.16)`}}>
            <ListItem keyName="categories" val={post[0].node.category}/>
          </div>
          <div css={cardList}>
            {Cards}
          </div>
        </div>
      </main>
    </Layout>
  ) 
}

export const query = graphql`
  query($tag: String) {
    allPosts(limit: 1000, filter: {tags: {in:[$tag]}}, sort: {order: DESC, fields: last_edited_time}) {
      edges {
        node {
          title
          cover
          tags
          publish_date
          category
          slug
        }
      }
    }
  }
`
