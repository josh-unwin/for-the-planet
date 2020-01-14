import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Earth from "../components/earth"
import TrendingStats from "../components/trending-stats"
import SEO from "../components/seo"
// import JSONbuildtime from "./json-at-buildtime"
import CommitmentList from '../components/commitment_list'
import CommitmentForm from '../components/commitment_form'

const IndexPage = ({data}) => (
  <Layout>
    <div className="container">
      <SEO title="Home" />
      <CommitmentForm />
      <TrendingStats />
      <Earth />
      <CommitmentList />
    </div>
  </Layout>
)



export default IndexPage
