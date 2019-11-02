import React, { Component } from 'react'
import Demo from '../Demo/Demo'
import { Section } from '../Utils/Utils'


export default class DemoPage extends Component {
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
        <Demo 
        onLoginSuccess={this.handleLoginSuccess}
        />
      </Section>
    )
  }
}
