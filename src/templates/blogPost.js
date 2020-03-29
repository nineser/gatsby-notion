import React from "react"
import {graphql} from "gatsby"

import { css } from "@emotion/core"

import Layout from "../components/layout"
import ListItem from "../components/ListItem"
import SEO from "../components/seo"
import TopBar from "../components/topbar"

const container = css`
  padding-bottom: 40px;
  padding-left: calc((100% - 745px) / 2);
  padding-right: calc((100% - 745px) / 2);
`

const iconBox = css`
  user-select: none;
  transition: background 120ms ease-in 0s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 78px;
  width: 78px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-top: 115px;
  margin-left: 3px;
  margin-bottom: 19px;
  align-self: flex-start;
  position: relative;
  z-index: 1;
`

const postInfo = css`
  display: flex;
  align-items: flex-start;
  border-top: 1px solid rgba(55, 53, 47, 0.09);
  border-bottom: 1px solid rgba(55, 53, 47, 0.09);
  padding: 12px 4px 16px;
  margin-bottom: 30px;
  color: rgba(55,53,47,0.6);
`

export default ({ data }) => {
  console.log(data);
  const { posts: { title, tags, publish_date, html } } = data
  return (
    <Layout>
      <SEO title={title} />
      <TopBar />
      <div css={container}>
        <div style={{padding:`0 20px`}}>
          <div css={iconBox}>
            <svg t="1583650257407" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3182" width="280" height="280"><path d="M43.072 974.72l380.864-301.952 151.936 161.6c0 0 63.424 17.28 67.328-30.72l-3.904-163.584 225.088-259.648 98.048-5.696c0 0 76.928-15.488 21.184-82.752l-275.072-276.928c0 0-74.944-9.6-69.248 59.584l0 75.008L383.552 367.104 225.856 376.64c0 0-57.728 19.2-36.608 69.248l148.16 146.176L43.072 974.72 43.072 974.72z" p-id="3183" fill="#FB7299"></path></svg>
          </div>
          <h1 style={{marginBottom: `25px`,fontSize: `2.5em`}}>{title}</h1>
          <div style={{margin:`0px`,padding: `4px 0 8px 0`,fontSize:`14px`}}>
            <ListItem keyName="Created" val={publish_date}/>
            <ListItem keyName="Last Edited" val="Last Edited" />
            <ListItem keyName="Category" val="Category" />
            <ListItem keyName="Tag" val={tags && tags.join(',')}/>
          </div>
          <div css={postInfo}>落花有意随流水，流水无情恋落花</div>
          <div className={`markdown-body`}> 
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    posts(slug: { eq: $slug }) {
      html
      title
      tags
      publish_date
    }
  }
`
