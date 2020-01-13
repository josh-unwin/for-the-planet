import React, { Component } from "react"
import { Form, Field } from 'react-final-form'

const onSubmit = async values => {
  console.log('form submitted');
  console.log(values);

  // db.collection('commitments').add(values)
}

class CommitmentForm extends Component {
  constructor(props) {
      super(props);
      this.state = { displayFullForm: false }; // defines initial state
  }

  onFocus = (event) => {
    this.setState({ displayFullForm: true })
  }

  render() {
    return (
      <div className="new-commitment">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="commitment-form-container">
                <h1>for the planet I will...</h1>
                <div className="commitment-form-group">
                  <div>
                    <Field className="commitment-form-comp" name="commitment" component="input" placeholder="go vegan!" onFocus={this.onFocus} onBlur={this.onFocus} />
                    <button className="commitment-form-button" type="submit">I'm committed!</button>
                  </div>
                  <div className={this.state.displayFullForm ? "flex-column" : "hidden"}>
                    <Field className="commitment-form-comp" name="name" component="input" placeholder="name - eg: 'Pete S'" />
                    <Field className="commitment-form-comp" name="country" component="input" placeholder="country" />
                  </div>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    )}

}

export default CommitmentForm
