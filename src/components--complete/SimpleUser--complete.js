import React, { Component } from 'react';


class SimpleUser extends Component {

  render() {
    let renderedClassVal
    let statusText

     if(this.props.status === 'active'){
        statusText = 'ACTIVE'
        renderedClassVal = 'status--active'
     } else {
        statusText = 'INACTIVE'
        renderedClassVal = 'status--inactive'
     }
     return (
      <div className={renderedClassVal}>
        <span>{this.props.user}</span>
        <span>{statusText}</span>
      </div>
    )
  }
}

export default SimpleUser;
