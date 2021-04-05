import React from 'react';

import './Post.css';

export default class Content extends React.Component {
  render() {
    return(
      <div>
        <div className="avatar">

        </div>
        <div className="text">
          {this.props.message}
        </div>
        <div className="like">
          like
        </div>
      </div>
    );
  }
}
