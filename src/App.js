import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import SignUpForm from './SignUpForm/SignUpForm'
import Landing from './Landing/Landing'
import Board from './Board/Board'
import Messages from './Messages/Messages'
import MessageUser from './MessageUser/MessageUser'
import MyProfile from './MyProfile/MyProfile'
import EditProfile from './EditProfile/EditProfile'
import Profile from './Profile/Profile'
import './App.css'

class App extends Component {
  render() {

  return (
    <main className='App'>
      <Header />
      <Route exact path='/' component={Landing} />
      <Route path='/SignUp' component={SignUpForm}/>
      <Route path='/Demo' component={Board} />
      <Route path='/MessageUser/:username' component={MessageUser}/*render={() => <MessageUser STORE={this.props}/>}*/ />
      <Route path='/Messages' component={Messages} />
      <Route path='/MyProfile' component={MyProfile} />
      <Route path='/Profile/:username' component={Profile} />
      <Route path='/EditProfile/:username' component={EditProfile} />
      <Route path='/Board' render={() => <Board STORE={this.props}/>}/>
    </main>
  );
}
}

export default App;
