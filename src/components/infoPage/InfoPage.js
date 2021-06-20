import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ScoreBoard from './ScoreBoard';
import useLocalStorage from '../../hooks/useLocalStorage';
import './InfoPage.css';

function InfoPage() {

    const [users, setUsers] = useState([]);

    const history = useHistory();

    const [localUsers] = useLocalStorage('users', '');

    useEffect(() => {
        setUsers(JSON.parse(localUsers));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleBackClick = () => {
        history.push('/');
    }

    return (
        <div className='info-page'>
            <IconButton aria-label="back" onClick={ handleBackClick }>
                <KeyboardBackspaceIcon color='secondary' className='icon' fontSize="large" />
            </IconButton>
            <ScoreBoard users={ users } />
        </div>
    )
}

export default InfoPage
