import React, { Component } from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'
import { Section } from '../Utils/Utils'


export default class LoginPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  state = { error: null }

  handleRegistrationSuccess = user => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/LogInForm'
    history.push(destination)
  }

  render() {
    return (
      <Section className="SignUpPage">
        <SignUpForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}
