import React from 'react';
import style from './Registration.module.css';
import api from './../../Api/api.js';
import { withRouter } from "react-router";

class Registration extends React.Component{
  state = {
    profile: {
      email: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: ''
    },
    error: {}
  }

  handleChange = e => {
    this.setState({
      profile: {
        ...this.state.profile,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.registration(this.state.profile);
      this.props.history.push('/');
    } catch (error) {
      this.setState({
        error
      })
    }
  }

  render() {
    return (
      <form className={style.registration_form} onSubmit={this.handleSubmit}>
        <input placeholder="Имя" className={style.firstName} name="firstName" onChange={this.handleChange} type="text"/>
        <input placeholder="Фамилия" className={style.lastName} name="lastName" onChange={this.handleChange} type="text"/>
        <input placeholder="Email" className={style.email} name="email" onChange={this.handleChange} type="text"/>
        <input placeholder="Пароль" className={style.password} name="password" onChange={this.handleChange} type="password"/>
        <input placeholder="Подтверждение пароля" className={style.password_confirmation} name="passwordConfirm" onChange={this.handleChange} type="password"/>
        <input className={style.captcha} onChange={this.handleChange} type="text"/>
        <input type="submit" value="Зарегистрироваться"/>
      </form>
    )
  }
}

export default withRouter(Registration);
