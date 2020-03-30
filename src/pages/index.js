import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import TopBar from "../components/TopBar"
import ImgCase from "../components/ImgCase"
import Intro from "../components/Intro"
import Main  from "../components/Main"
import Footer from "../components/Footer"


const IndexPage = (props) => {
  const { data: { allPosts } } = props
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
