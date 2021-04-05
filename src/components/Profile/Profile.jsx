import React from 'react';
import Post from './Post/Post.jsx';
import style from './Profile.module.css';

export default class Profile extends React.Component {
  render() {
    return(
      <div className={style.holder}>
        <div className={style.avatar}>

        </div>
        <div className={style.personalInfo}>

        </div>
        <div className={style.createPostElement}>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <div className={style.posts}>
          <Post message="hi, how are you?"/>
          <Post message="are you ok?"/>
        </div>
      </div>
    );
  }
}
