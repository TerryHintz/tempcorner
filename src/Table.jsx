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

const rows = [
    createData('Leo', 1037, 4, 2, 0, 66.67.toString() + '%', 2),
    createData('Gaurav', 1037, 4, 2, 0, 66.67.toString() + '%', 2),
];

// load player data from database into array called rows

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