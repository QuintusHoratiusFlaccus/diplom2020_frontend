import React from 'react';
import style from './Login.module.css';
import api from './../../Api/api.js';
import { withRouter } from "react-router";
import axios from "axios";

class Login extends React.Component{
  state = {
    login: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      let data = await api.login(this.state);
      window.localStorage.setItem('auth', data.headers.auth);
      axios.defaults.headers.common.auth = data.headers.auth;
      this.props.history.push(`/profile/${data.data._id}`);
    } catch (error) {
      this.setState({
        error
      })
    }
  }

  render() {
    return (
      <div className={style.wrapper}>
      <form onSubmit={this.handleSubmit}>
        <div>
          <input placeholder="Эл. почта" className={style.login} name="login" onChange={this.handleChange} type="text"/>
        </div>
        <div>
          <input placeholder="Пароль" className={style.password} name="password" onChange={this.handleChange} type="password"/>
        </div>
        <div>
          <input type="submit" value="Логин"/>
        </div>
      </form>
      </div>
    )
  }
}

export default withRouter(Login);
