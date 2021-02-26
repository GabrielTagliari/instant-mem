import React from 'react';
import './Loading.css';

class Loading extends React.Component {
  render() {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loading;
