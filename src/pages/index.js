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
      <div className="graphql_test">
        <p>{data.allCommitments.edges[1].node.commitment}</p>
        {data.allCommitments.edges.forEach(commitmentUni =>
          <p>{commitmentUni.node.commitment}</p>
          )}
      </div>
      <TrendingStats />
      <Earth />
      <CommitmentList />
    </div>
  </Layout>
)

export const query = graphql`
  query TestQuery {
    allCommitments {
      edges {
        node {
          commitment
          name
          country
        }
      }
    }
  }
`

export default IndexPage
