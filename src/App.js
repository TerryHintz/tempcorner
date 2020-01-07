import React, { Component } from 'react';
import SimpleTable from "./Table";
import Panel from "./Panel";

import './App.css';

class App extends Component {
  state = {

  };

  componentDidMount() {

  }

  render() {
    return(
        <div className={'root'}>
            <div className={'root-inner'}>
            <Panel/>
          <SimpleTable/>
            </div>
        </div>
    );
  }
}

export default App;
