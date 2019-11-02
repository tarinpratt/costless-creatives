import React, {Component} from 'react';
import config from '../config'
import TokenService from '../Services/Token-Service'
import Mailto from 'react-protected-mailto'
import ProfileApiService from '../Services/Profile-Api-Service'
import './MessageUser.css'

class MessageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            username: '',
            email: ''
        };     
    }
    componentDidMount() {
        const userId = this.props.match.params.userId
        fetch(`${config.API_ENDPOINT}/users/${userId}`, {
          method: 'GET',
          headers: {
            'authorization': `bearer ${TokenService.getAuthToken()}`
        }
     })
      .then(res => {
          if(!res.ok)
             return res.json().then(error => Promise.reject(error))
             return res.json()
      })
          .then(responseData => {
            this.setState({
                id: responseData.id,
                username: responseData.username, 
                email: responseData.email, 
                user: [...this.state.user, responseData]
            })
          })
          .catch(error => {
              console.error(error)
              this.setState({error})
          })
      }
    render() {

    return (
        <section className="chat">
            <form className="chatForm" >
                <h1>Chat with {this.state.username}</h1>
                <label htmlFor="msg">Message</label>
                <textarea placeholder="Type message.." name="msg" rows="5" required></textarea>
                <a href={`mailto:${this.state.email}`} subject="A message from Costless Creatives">Email {this.state.username}</a>
                <button type="submit" className="btn">Send</button>
            </form>
        </section>
    
    )
}
}
export default MessageUser