import React from 'react';
import style from './NavLink.module.css';

export default class NavLink extends React.Component {
  render() {
    return(
      <div className={style.holder}>
        <span>{this.props.linkName}</span>
      </div>
    );
  }
}
