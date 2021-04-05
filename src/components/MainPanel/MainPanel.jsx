import React from 'react';
import {Link} from 'react-router-dom';
import style from './MainPanel.module.css';
import PanelAccount from './PanelAccount/PanelAccount.jsx';

export default class MainPanel extends React.Component {
  render() {
    return(
      <div className={style.holder}>
        <div className={style.account}>
          <PanelAccount/>
        </div>
        <nav className={style.navigation}>
          <Link className={style.link} to={`/profile`}>
            <span>Профиль</span>
          </Link>
          <Link className={style.link} to={`/newsfeed`}>
            <span>Новости</span>
          </Link>
          <Link className={style.link} to={`/dialogs`}>
            <span>Диалоги</span>
          </Link>
          <Link className={style.link} to={`/friends`}>
            <span>Друзья</span>
          </Link>
          <Link className={style.link} to={`/music`}>
            <span>Музыка</span>
          </Link>
          <Link className={style.link} to={`/settings`}>
            <span>Настройки</span>
          </Link>
        </nav>
      </div>
    );
  }
}
