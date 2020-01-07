import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// export default function SimpleTable() {
class SimpleTable extends Component {

    state = {
        player_stats: [],
    };

    componentDidMount() {
        fetch('http://boardgames.gaurmand.com/api/get/?type=player_stat')
            .then(res => {
                res.json().then(res => {
                    console.log(res);
                    this.setState({player_stats: res});
                })
            })
            .catch(console.error)
    }

    render() {

        return (
            <div className={'table-root'}>
                {this.state.player_stats.map(stats => (
                    <div style={{padding: '10px'}}>
                        <div className={'game-title'}><span className={'montserrat'}>{stats.game_name + ' Leaderboard'}</span></div>
                        <TableContainer component={Paper}>

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
                                    {stats.stats.map(row => (
                                        <TableRow key={stats.game_name + ' ' + row.player_name}>
                                            <TableCell component="th" scope="row">
                                                {row.player_name}
                                            </TableCell>
                                            <TableCell align="right">{row.elo}</TableCell>
                                            <TableCell align="right">{row.num_wins}</TableCell>
                                            <TableCell align="right">{row.num_losses}</TableCell>
                                            <TableCell align="right">{row.num_draws}</TableCell>
                                            <TableCell align="right">{row.win_percentage}</TableCell>
                                            <TableCell align="right">{row.plusminus}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                ))}
            </div>
        );
    }
}

export default SimpleTable;