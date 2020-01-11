import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import JSONbuildtime from "./json-at-buildtime"
import CommitmentList from '../components/commitment_list'
import CommitmentForm from '../components/commitment_form'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="new-commitment">
      <CommitmentForm />
    </div>
    <CommitmentList />
  </Layout>
)

export default IndexPage
