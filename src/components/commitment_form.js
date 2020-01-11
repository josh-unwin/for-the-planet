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
  <div className="new-commitment">
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="commitment-form-container">
            <h1>for the planet I will...</h1>
            <div className="commitment-form-group">
              <Field className="commitment-form-comp" name="commitment" component="input" placeholder="go vegan!" />
              {/*<Field name="name" component="input" placeholder="John S" />*/}
              <button className="commitment-form-button" type="submit">Share your commitment</button>
            </div>
          </div>
        </form>
      )}
    />
  </div>
)

export default CommitmentForm
