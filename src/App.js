import React, { Component } from 'react';
import FilterableList from './components/FilterableList.js';

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <h1>React State - Complex</h1>
        <FilterableList/>
      </div>
    );
  }
}

export default App;
