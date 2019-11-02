import React, { Component } from 'react';
import TokenService from '../Services/Token-Service'
import AuthApiService from '../Services/Auth-Api-Service'
import { Button, Input } from '../Utils/Utils'
import './Demo.css';

class Demo extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
      }
         state = { 
           loading: false,
           error: null }
     
      handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ 
          loading: true, 
          error: null })
        const { username, password } = ev.target   
        AuthApiService.postLogin({
          username: username.value,
          password: password.value,
        })
          .then(res => {
            username.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
            this.setState({
              loading: false
            })
               
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }
    
    
        render() {
            const { error } = this.state
        return (
              <form className="logInForm" onSubmit={this.handleSubmitJwtAuth}>
                <div role='alert'>
                {error && <p className='red'>{error}</p>}
                </div>
                  <label htmlFor="username">
                      Username
                      <Input
                      name="username"
                      type="text"
                      defaultValue="DanceLyfe"
                      placeholder="Demo"
                      required>
                      </Input>
                  </label>
                  <label htmlFor="password">
                      Password
                      <Input
                      name="password"
                      type="password"
                      defaultValue="1234567Tp#"
                      placeholder="demo"
                      required>
                      </Input>
                  </label>
                  <Button type="submit" className="logInSubmit">
                      Demo
                  </Button>
              </form>
        )
    }
}
export default Demo;