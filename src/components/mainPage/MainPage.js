import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Generator from './Generator';
import InputMatrix from './InputMatrix';
import evaluateMatrix from '../../services/evaluateMatrix';
import useLocalStorage from '../../hooks/useLocalStorage';
import Round from '../../models/Round';
import './MainPage.css';

function MainPage() {

    const [users, setUsers] = useState([]);
    const [rounds, setRounds] = useState([]);

    const [localUsers, setLocalUsers] = useLocalStorage('users', '');
    const [localRounds, setLocalRounds] = useLocalStorage('rounds', '');

    const history = useHistory();

    useEffect(() => {
        if (localUsers.length > 2) {
            setUsers(JSON.parse(localUsers));
        }
        if (localRounds.length > 2) {
            setRounds(JSON.parse(localRounds));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log('Setting Users');
        setLocalUsers(JSON.stringify(users));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users])

    useEffect(() => {
        setLocalRounds(JSON.stringify(rounds));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rounds])

    const handleInfoClick = () => {
        history.push('/info')
    }

    const handleRestartGameClick = () => {
        setRounds([]);
        let newUsers = [...users];
        newUsers.forEach(user => {
            user.points = [];
            user.totalPoints = 0;
            user.weights = [];
            user.totalWeight = 0;
        })
        setUsers(newUsers);
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
        let newUsers = [...users];
        newUsers.forEach(user => {
            user.weights.push(0);
        })
        setUsers(newUsers);
    }

    const calculateScores = () => {
        let newUsers = evaluateMatrix([...users], [...rounds]);
        setUsers(newUsers);
    }

    return (
        <div className='main-page'>
            <Generator generateRound={ generateRound } calculateScores={ calculateScores } rounds={ rounds } />
            <div className='input-matrix-wrapper'>
                <InputMatrix users={ users } setUsers={ setUsers } rounds={ rounds } setRounds={ setRounds } />
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
