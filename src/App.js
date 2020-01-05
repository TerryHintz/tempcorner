import React, { Component } from 'react';
import SimpleTable from "./Table";

class App extends Component {
  state = {

  };

  componentDidMount() {
    fetch('https://boardgames.gaurmand.com/api/get/?type=player_stat')
    .then(res => {
      console.log(res.json())
      this.setState({player_stats: res.json()})
    })
    .catch(console.error)
  }

  render() {
    return(
        <div>
          <SimpleTable
            player_stats = {this.state.player_stats}
          />
        </div>
    );
  }
}

export default App;
