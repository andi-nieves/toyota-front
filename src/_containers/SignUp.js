import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signUpAction } from '../_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/css/registration.css';

class SignUp extends Component {
  submit = (values) => {
    this.props.signUpAction(values, this.props.history);
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="registration-section">
        <div className="photo-side">
        </div>
        <div className="signup-container">
          <Link to="/">Go back</Link>
          <h1>Sign Up</h1>
          <form onSubmit={ handleSubmit(this.submit) }>
            <Field name="email"
              component="input"
              type="text"
              placeholder="Email" 
            />
            <Field name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
            <Field name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
            <Field name="company"
              component="input"
              type="text"
              placeholder="Company" 
            />
            <Field name="contactPerson"
              component="input"
              type="text"
              placeholder="Contact Person" 
            />
            <Field name="contactNumber"
              component="input"
              type="text"
              placeholder="Contact Number" 
            />
            <Field name="designation"
              component="input"
              type="text"
              placeholder="Designation" 
            />
            <Field name="dateOfBirth"
              component="input"
              type="date"
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.signup.error }
}

const reduxFormSignup = reduxForm({
  form: 'signup'
})(SignUp);

export default connect(mapStateToProps, {signUpAction})(reduxFormSignup);