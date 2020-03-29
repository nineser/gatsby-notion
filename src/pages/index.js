import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBar from "../components/topbar"
import ImgCase from "../components/ImgCase"
import Intro from "../components/Intro"
import Main  from "../components/main"
import Footer from "../components/footer"

//import PostItem from "../components/postItem"

const IndexPage = (props) => {
  const { data: { allPosts } } = props
  //console.log(allPosts)
  return (
    <Layout>
      <SEO title="My Note"/>
      <header>
        <TopBar/>
        <ImgCase />
      </header>
      <Intro />
      <Main categoryArr={allPosts}/>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allPosts(sort: {order: DESC, fields: last_edited_time}) {
      group(field: category) {
        fieldValue
      }
    }
  }
`

export default IndexPage
