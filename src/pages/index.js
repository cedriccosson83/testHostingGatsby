import React from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../components/Layout/Layout"
import Home from "../components/Home/Home"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Ortros" />
      <Home />
    </Layout>
  )
}

export default IndexPage
