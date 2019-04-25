import React, { Component } from 'react';
import { Link, Route, HashRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header.js';
import Home from './containers/home.js';
import Posts from './containers/users.js';
import User from './containers/user.js'
import Users from './containers/users.js'
import Adduser from './containers/newUser.js';
import Addshows from './containers/newShow.js';
import Show from './containers/show.js';
import Shows from './containers/shows.js';
//import Posts from './containers/posts';


class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      user: null,
      id: null
    }
  }

  componentDidMount () {
    console.log()
    //localStorage

    //set state to user
  }

  activeUser = (user, id) => {
    this.setState({user, id}, () => 
    console.log(this.state));
  }


  render() {
    return (
      <HashRouter>
      {/* <Route path='/' component={Header}/> */}
      <Header/>
      <Switch>
      <Route path='/' exact component = {Home} />
      <Route path='/user/post'exact component = {Posts}/>
      <Route path='/users/:id' exact component = {User}/> 
      <Route path='/user' exact component = {Users}/> 
      <Route path='/user/adduser' exact component = {Adduser}/>  
      <Route path='/show' exact component = {Show}/>
      <Route path='/shows/:id' exact component = {Shows}/>
      <Route path='/show/addshow' exact component = {Addshows}/>
      </Switch>
    </HashRouter>

    );
  }
}

export default App;
