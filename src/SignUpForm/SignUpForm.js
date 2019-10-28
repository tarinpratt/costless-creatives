import React, {Component} from 'react';
import './SignUpForm.css'

class SignUpForm extends Component {
  render() {
  return (
    <form className="signUpForm">
        <h1>Sign Up</h1>
    <label htmlFor="username">
        Username
        <input
        className="signUpInput"
        name="username"
        type="text"
        required>
        </input>
    </label>
    <label htmlFor="email">
        Email
        <input
        className="signUpInput"
        name="email"
        type="email"
        required>
        </input>
    </label>
    <label htmlFor="password">
        Password
        <input
        className="signUpInput"
        name="password"
        type="password"
        required>
        </input>
    </label>
    <button type="submit" className="signUpSubmit">
        Sign Up
    </button>

</form>

        )
    }
}

export default SignUpForm;