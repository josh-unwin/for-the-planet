import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Form, Field } from 'react-final-form'
// import JSONbuildtime from "./json-at-buildtime"
import JSONData from "../../data/commitments.json"
import CommitmentList from '../components/commitment_list'

const onSubmit = async values => {
  console.log('form submitted');
  console.log(values);
  console.log(JSONData.commitments);
  JSONData.commitments.push({"user": values.name, "commitment": values.commitment})
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>for the planet I will...</h2>
          <div>
            <Field name="commitment" component="input" placeholder="go vegan!" />
            <Field name="name" component="input" placeholder="John S" />
            <button type="submit">Share your commitment</button>
          </div>
        </form>
      )}
    />
    <CommitmentList />
  </Layout>
)

export default IndexPage
