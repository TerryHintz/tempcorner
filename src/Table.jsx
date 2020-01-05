import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(player, elo, wins, losses, draws, win_percentage, plus_minus) {
    return { player, elo, wins, losses, draws, win_percentage, plus_minus };
}

//connect to db
const { Client } = require('pg')
const client = new Client()
client.connect()

// load player data from database into array called rows
const rows = [];

let select_query = 'SELECT g.name game_name, p.name player_name, num_wins, num_losses, num_draws, elo '
let join_query = 'FROM player_stat ps INNER JOIN game g ON ps.game_id=g.game_id INNER JOIN player p ON ps.player_id=p.player_id '
let order_query = 'ORDER BY game_name DESC, elo DESC;'
    
client.query(select_query + join_query + order_query, (err, result) => {
  if (err)
      next(err)
  else{
    let games_stats = []
    result.rows.forEach(row => {
      let player_stat = {
        player: row.player_name,
        elo: Math.round(row.elo),
        wins: row.num_wins,
        losses: row.num_losses,
        draws: row.num_draws,
        win_percentage: getWinPercentage(row.num_wins, row.num_losses, row.num_draws),
        plus_minus: row.num_wins - row.num_losses
      }
      
      let game_stats = games_stats.find(gs => gs.game_name == row.game_name)
      
      if (!game_stats){
        games_stats.push({
          game_name: row.game_name,
          stats: [player_stat]
        })
      } else{
        game_stats.stats.push(player_stat)
      }
    })
    console.log(games_stats)
    rows = games_stats
  }
})  

function getWinPercentage(wins, losses, draws){
  let num_games = wins + losses + draws
  return num_games ? (100*wins/num_games).toFixed(2)+'%' : "0%"
}

export default function SimpleTable() {

    return (
        <div>
            <TableContainer style={{maxWidth: '800px'}} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Player</TableCell>
                            <TableCell align="right">Elo</TableCell>
                            <TableCell align="right">Wins</TableCell>
                            <TableCell align="right">Losses</TableCell>
                            <TableCell align="right">Draws</TableCell>
                            <TableCell align="right">Win Percentage</TableCell>
                            <TableCell align="right">+/-</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.player}
                                </TableCell>
                                <TableCell align="right">{row.elo}</TableCell>
                                <TableCell align="right">{row.wins}</TableCell>
                                <TableCell align="right">{row.losses}</TableCell>
                                <TableCell align="right">{row.draws}</TableCell>
                                <TableCell align="right">{row.win_percentage}</TableCell>
                                <TableCell align="right">{row.plus_minus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}