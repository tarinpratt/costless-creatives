import React, { Component } from 'react'
import LoginForm from '../LogInForm/LogInForm'
import Demo from '../Demo/Demo'
import { Section } from '../Utils/Utils'


export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <Section className="LogInPage">
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
        <Demo 
        onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
