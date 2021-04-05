import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderComponent from './components/Header/Header.jsx';
import MainPanel from './components/MainPanel/MainPanel.jsx';
import Profile from './components/Profile/Profile.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import RegLoginPanel from './components/RegLoginPage/RegLoginPage.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';
import api from './Api/api.js';
import { withRouter } from "react-router";
import axios from "axios";

class App extends React.Component {

  async componentDidMount() {
    let token = window.localStorage.getItem('auth');
    if(token){
      try {
        axios.defaults.headers.common.auth = token;
        let data = await api.relogin();
        this.props.history.push(`/profile/${data.data._id}`);
      } catch (error) {

      }
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <RegLoginPanel/>
            <Login/>
          </Route>
          <Route path="/1">
            <RegLoginPanel/>
            <Registration/>
          </Route>
          <Route path="/profile">
            <div className="wrapper">
              <div className="head">
                <HeaderComponent/>
              </div>
              <div className="mainPanel">
                <MainPanel/>
              </div>
              <div className="navigation">
                <Navigation/>
              </div>
              <div className="content">
                <Profile/>
              </div>
            </div>
          </Route>
          <Route>

          </Route>
        </Switch>
      </Router>
    );
  }
}

export default withRouter(App);
