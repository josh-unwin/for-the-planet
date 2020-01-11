import React from "react"
import { Form, Field } from 'react-final-form'
import JSONData from "../../data/commitments.json"

const onSubmit = async values => {
  console.log('form submitted');
  console.log(values);
  console.log(JSONData.commitments);
  JSONData.commitments.push({"user": values.name, "commitment": values.commitment})
}

const CommitmentForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>for the planet I will...</h2>
        <h3> Testing</h3>
        <div>
          <Field name="commitment" component="input" placeholder="go vegan!" />
          <Field name="name" component="input" placeholder="John S" />
          <button type="submit">Share your commitment</button>
        </div>
      </form>
    )}
  />
)

export default CommitmentForm
