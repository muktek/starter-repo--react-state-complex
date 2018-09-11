import React, { Component } from 'react';
import SimpleUser from './SimpleUser'

const allUsersList = [
  { user: 'Tomas' , status: 'active'},
  { user: 'Maria' , status: 'inactive'},
  { user: 'Maria' , status: 'active'},
  { user: 'Alejandra' , status: 'active'},
  { user: 'Carolina' , status: 'active'},
  { user: 'Romina' , status: 'inactive'},
  { user: 'Daniela' , status: 'inactive'},
]

class FilterableList extends Component {

  _showList(uList){
    let jsxArray = uList.map(function(userObj){
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
            Currently showing: <mark>{'all'}</mark>
          </h4>
          <span>All</span>
          <span>Active</span>
          <span>Inactive</span>
        </aside>


        <section>
          { this._showList(allUsersList) }
        </section>

      </main>
    );
  }
}

export default FilterableList;
