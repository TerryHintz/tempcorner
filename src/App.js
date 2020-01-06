import React, { Component } from 'react';
import SimpleTable from "./Table";

class App extends Component {
  state = {
      player_stats: [],
  };

  componentDidMount() {
    fetch('http://boardgames.gaurmand.com/api/get/?type=player_stat')
    .then(res => {
        res.json().then(res => {
            console.log(res);
            this.setState({player_stats: res[0].stats});
            console.log(this.state.player_stats)
        })
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
