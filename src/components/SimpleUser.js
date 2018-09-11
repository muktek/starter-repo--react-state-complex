import React, { Component } from 'react';


class SimpleUser extends Component {
  render() {
    let renderedClassVal = 'status--active'
    return (
      <div className={renderedClassVal}>
        <span>Some User</span>
        <span>ACTIVE</span>
      </div>
    )
  }
}

export default SimpleUser;
