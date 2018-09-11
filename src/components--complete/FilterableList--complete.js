import React, { Component } from 'react';
import SimpleUser from './SimpleUser--complete.js'

const allUsersList = [
  { user: 'Tomas' , status: 'active'},
  { user: 'Maria' , status: 'inactive'},
  { user: 'Maria' , status: 'active'},
  { user: 'Alejandra' , status: 'active'},
  { user: 'Carolina' , status: 'active'},
  { user: 'Romina' , status: 'inactive'},
  { user: 'Daniela' , status: 'inactive'},
]


/*
**(b)** Student can conditionally render values in top level component based on state

  _[b.1]_ - define state

  _[b.2]_ - render `visibleUserType`


**(c)** Student can filter a list based on state

  _[c.1]_ - filter list

  _[c.2]_ - conditionally return inside true inside filter based on

          value in `state.visibleUserType`: 'active', 'inactive' values

        AND user's `status` property's value


**(d)** Student can pass custom values to event-handler callback functions to manipulate state

  _[d.1]_ - declare event handler method with parameter that receives custom value

  _[d.2]_ - set state to parameter value received

  _[d.3]_ -
    1. create anonymous function to handle event
    2. execute the handler INSIDE that function and pass string value that will modify state
       ('all', 'active', 'inactive')
*/


class FilterableList extends Component {

  // [b.1] - define state
  constructor(){
    super()
    this.state = {
      visibleUserType: 'inactive' // 'active' , 'all'
    }
  }

  // [d.1] declare method with parameter that receives custom value

  _handleClick(val){
    // [d.2] - set state to parameter value received
    this.setState({
      visibleUserType: val
    })
  }

  _showList(uList){
    /*_[c.1]_ - filter list based on state value*/
    let jsxArray = uList.filter((u)=>{
       /*_[c.2]_  */
        if(this.state.visibleUserType === 'all') return true
        if(this.state.visibleUserType === 'active' && u.status === 'active') return true
        if(this.state.visibleUserType === 'inactive' && u.status === 'inactive') return true
        return false
      })
      .map((userObj)=>{
        return <SimpleUser
          user={userObj.user}
          status={userObj.status}
        />
      })

    return jsxArray
  }

  render() {

    return (
      <main>
        <aside>
          <h4>
            Currently showing:
            {/* [b.2] render state value */}
            <mark>{this.state.visibleUserType}</mark>
          </h4>

          {/* [d.2] cal */}
          <span onClick={ ()=>{this._handleClick('all') } }>All</span>
          <span onClick={ ()=>{this._handleClick('active') } }>Active</span>
          <span onClick={ ()=>{this._handleClick ('inactive')} }>Inactive</span>
        </aside>


        <section>
          { this._showList(allUsersList) }
        </section>

      </main>
    );
  }
}

export default FilterableList;
