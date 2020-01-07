import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

class Panel extends Component {

    state = {
        game: false,

    };

    componentDidMount() {

    }

    handleAddGame = () => {
        this.setState({game: true})
    };

    handleAddPlayer = () => {

    };

    handleAddMatch = () => {

    };

    handleCloseGame = () => {
        this.setState({game: false})
    };

    handleSubmit = () => {
        let gameName = document.getElementById('gameName').value;
        console.log(gameName);
        let description = document.getElementById('description').value;
        console.log(description);

        //do your backend stuff here
    };

    render() {

        return (
            <div className={'panel-root'}>
                <ButtonGroup
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical outlined primary button group"
                >
                    <Button onClick={() => this.handleAddGame()}>Add Game</Button>
                    <Button onClick={() => this.handleAddPlayer()}>Add Player</Button>
                    <Button onClick={() => this.handleAddMatch()}>Add Match</Button>
                </ButtonGroup>
                <Dialog open={this.state.game} onClose={this.handleCloseGame}>
                    <DialogTitle>Add Game</DialogTitle>
                    <div>
                        <div>Game Name</div>
                        <TextField id="gameName" label="Outlined" variant="outlined" />
                        <div>Description</div>
                        <TextField id="description" label="Outlined" variant="outlined" />
                        <div>
                            <Button onClick={() => this.handleSubmit()}>Submit</Button>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default Panel;