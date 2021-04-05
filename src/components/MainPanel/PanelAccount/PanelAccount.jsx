import React from 'react';
import style from './PanelAccount.module.css';

export default class PanelAccount extends React.Component {
  render() {
    return(
      <div className={style.holder}>
        <div className={style.account_avatar}>

        </div>
        <div className={style.account_name}>
          Початок Кукутана
        </div>
      </div>
    );
  }
}
