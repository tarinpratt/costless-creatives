import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom'
import Header from './Header/Header'
import LogInPage from './LogInPage/LogInPage'
import SignUpPage from './SignUpPage/SignUpPage'
import Landing from './Landing/Landing'
import Board from './Board/Board'
import DemoPage from './DemoPage/DemoPage'
import MyProfile from './MyProfile/MyProfile'
import AddProfile from './AddProfile/AddProfile'
import EditProfile from './EditProfile/EditProfile'
import Profile from './Profile/Profile'
import PrivateRoute from './Utils/PrivateRoute'
import PublicRoute from './Utils/PublicRoute'
import './App.css'

class App extends Component {

  render() {
  return (
    <main className='App'>
      <Header />
      <Route exact path='/' component={Landing} />
      <PublicRoute path='/LogInForm' component={LogInPage}/>
      <PublicRoute path='/SignUp' component={SignUpPage}/>
      <PublicRoute path='/Demo' component={DemoPage} />
      <PrivateRoute path='/MyProfile' component={MyProfile} />
      <PrivateRoute path='/AddProfile' component={AddProfile} />
      <PrivateRoute path='/Profile/:userId' component={Profile} />
      <PrivateRoute path='/EditProfile/:profileId' component={EditProfile} />
      <PrivateRoute path='/Board' component={Board}/>
    </main>
  );
}
}

export default withRouter (App);
