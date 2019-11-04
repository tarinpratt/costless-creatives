import React, {Component} from 'react';
import AuthApiService from '../Services/Auth-Api-Service'
import { Button, Input } from '../Utils/Utils'
import './SignUpForm.css'

class SignUpForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
      }
         state = { 
           loading: false,
           error: null }

    handleSubmit = ev => {
      ev.preventDefault()
      this.setState({ 
        loading: true,
        error: null })
        const { username, email, password } = ev.target
      AuthApiService.postUser({
        username: username.value,
        email: email.value,
        password: password.value,
      })
        .then(user => {
          username.value = ''
          email.value = ''
          password.value = ''
          this.props.onRegistrationSuccess()
          this.setState({
            loading: false
          })
        })
        .catch(res => {
          this.setState({ error: res.error})
        })
    } 
    render() {
          const { error } = this.state
  return (
    <form className="signUpForm" role='post' onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
    <label htmlFor="username">
        Username
        <Input
        className="signUpInput"
        name="username"
        type="text"
        required>
        </Input>
    </label>
    <label htmlFor="email">
        Email
        <Input
        className="signUpInput"
        name="email"
        type="email"
        required>
        </Input>
    </label>
    <label htmlFor="password">
        Password
        <Input
        className="signUpInput"
        name="password"
        type="password"
        required>
        </Input>
    </label>
    <p className="passwordRules">Password must be at least 9 characters long and contain 1 upper case, lower case, number and special character </p>
    <Button type="submit" className="signUpSubmit">
        Sign Up
    </Button>
    </form>
        )
    }
}

export default SignUpForm;