import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Generator from './Generator';
import InputMatrix from './InputMatrix';
import Round from '../../models/Round';
import './MainPage.css';

function MainPage({ users }) {

    const [rounds, setRounds] = useState([]);

    const history = useHistory();

    const handleInfoClick = () => {
        history.push('/info')
    }

    const handleRestartGameClick = () => {
        console.log('Restart Game');
    }

    const handleAddUsersClick = () => {
        history.push('/add-users');
    }

    const generateRound = (expectation) => {
        let values = new Array(users.length).fill(0);
        let today = new Date();
        let timestamp = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let round = new Round(values, expectation, timestamp);
        if (rounds.length !== 0) {
            round.id = rounds[0].id + 1;
        }
        setRounds(prevRounds => [round, ...prevRounds]);
        // Modify Users
        users.forEach(user => {
            user.weights.push(0);
        })
    }

    return (
        <div className='main-page'>
            <Generator generateRound={ generateRound } />
            <div className='input-matrix-wrapper'>
                <InputMatrix users={ users } rounds={ rounds } setRounds={ setRounds } />
            </div>
            <div className='button-wrapper'>
                <Fab color="primary" onClick={ handleInfoClick }>
                    <FormatListNumberedIcon />
                </Fab>
                <Button variant="contained" color="secondary" onDoubleClick={ handleRestartGameClick }>
                    Restart Game
                </Button>
                <Fab color="primary" onClick={ handleAddUsersClick }>
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}

export default MainPage
