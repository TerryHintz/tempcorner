import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

class Panel extends Component {

    state = {
        game: false,
        player: false,
        match: false,

    };

    componentDidMount() {

    }

    handleAddGame = () => {
        this.setState({game: true})
    };

    handleAddPlayer = () => {
        this.setState({player: true})
    };

    handleAddMatch = () => {
        this.setState({match: true})
    };

    handleCloseGame = () => {
        this.setState({game: false})
    };

    handleClosePlayer = () => {
        this.setState({player: false})
    };

    handleCloseMatch = () => {
        this.setState({match: false})
    };

    handleSubmitGame = () => {
        let gameName = document.getElementById('gameName').value;
        console.log(gameName);
        let description = document.getElementById('description').value;
        console.log(description);

        //do your backend stuff here
    };

    handleSubmitPlayer = () => {
        let playerName = document.getElementById('playerName').value;
        console.log(playerName);

        //do your backend stuff here
    };

    handleSubmitMatch = () => {
        //do your backend stuff here
    };

    render() {

        return (
            <div className={'panel-root'}>
                <ButtonGroup
                    style={{padding: '50px'}}
                    orientation="vertical"
                    color="primary"
                    aria-label="vertical outlined primary button group"
                >
                    <Button onClick={this.handleAddGame}>Add Game</Button>
                    <Button onClick={this.handleAddPlayer}>Add Player</Button>
                    <Button onClick={this.handleAddMatch}>Add Match</Button>
                </ButtonGroup>
                <Dialog open={this.state.game} onClose={this.handleCloseGame}>
                    <DialogTitle>Add Game</DialogTitle>
                    <div>
                        <div>Game Name</div>
                        <TextField id="gameName" label="Outlined" variant="outlined" />
                        <div>Description</div>
                        <TextField id="description" label="Outlined" variant="outlined" />
                        <div>
                            <Button onClick={() => this.handleSubmitGame()}>Submit</Button>
                        </div>
                    </div>
                </Dialog>
                <Dialog open={this.state.player} onClose={this.handleClosePlayer}>
                    <DialogTitle>Add Player</DialogTitle>
                    <div>
                        <div>Player Name</div>
                        <TextField id="playerName" label="Outlined" variant="outlined" />
                        <div>
                            <Button onClick={() => this.handleSubmitPlayer()}>Submit</Button>
                        </div>
                    </div>
                </Dialog>
                <Dialog open={this.state.match} onClose={this.handleCloseMatch}>
                    <DialogTitle>Add Match</DialogTitle>
                    <div>
                        {/*this one i need to fetch player list from db so u will need to gimme func*/}
                        <div>
                            <Button onClick={() => this.handleSubmitMatch()}>Submit</Button>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default Panel;