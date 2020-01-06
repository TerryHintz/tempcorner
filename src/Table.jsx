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

    };

    render() {

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
                            {this.props.player_stats.map(row => (
                                // {[].map(row => (
                                <TableRow key={row.player_name}>
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
        );
    }
}

export default SimpleTable;