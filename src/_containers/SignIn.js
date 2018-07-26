import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction } from '../_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/css/signin.css';

class SignIn extends Component {
  submit = (values) => {
    this.props.signInAction(values, this.props.history);
  }

  errorMessage() {

    if (this.props.errorMessage) {
      //this.errorClass = "login-error";
      return (
        <div className="login-error">
          <i className="fa fa-exclamation"></i> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="signin-section">
        <div className="signin-wrapper">
          <h1>Toyota</h1>
          <h2>Material Handling</h2>

          <div id="login-error">
            {this.errorMessage()}
          </div>

          <form onSubmit={ handleSubmit(this.submit) }>
            <Field name="email"
              component="input"
              type="text"
              placeholder="Email"
            />
            <Field name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign In</button>
          </form>
          <div className='links'>
            <Link to="/password">Password</Link>
            <span>|</span>
            <Link to="/signup">Register</Link>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

const reduxFormSignin = reduxForm({
  form: 'signin'
})(SignIn);

export default connect(mapStateToProps, {signInAction})(reduxFormSignin);
