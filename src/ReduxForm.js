import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Field, reduxForm,SubmissionError  } from 'redux-form'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const submitHandler= (values )=> {
  console.log("submitter");
  return sleep(1000).then(() => {
    // simulate server latency
    if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!'
      })
    } else if (values.password !== 'redux-form') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
      })
    } else {
      console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })

}


//class ReduxForm extends Component {

  const ReduxForm1 = props => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
 return (
 <form  onSubmit={handleSubmit(submitHandler)}>

<Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
<Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />

      <button type="submit" disabled={submitting}>
          Log In
        </button>      
</form>)
}

export default reduxForm({
  form: 'submitValidationPractice' // a unique identifier for this form
})(ReduxForm1)

