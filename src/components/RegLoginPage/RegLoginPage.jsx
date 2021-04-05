import React from 'react';
import style from './RegLoginPage.module.css';
import Registration from './Registration/Registration.jsx';
import Login from './Login/Login.jsx';

export default class RegLoginPanel extends React.Component{
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.logo}>

        </div>
        <div className={style.regLog_wrapper}>
          <div className={style.navigation}>

          </div>

        </div>
      </div>
    )
  }
}
