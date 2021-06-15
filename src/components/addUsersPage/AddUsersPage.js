import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import UserCard from './UserCard';
import User from '../../models/User';
import './AddUsersPage.css';

function AddUsersPage({ users, addUser, removeUser }) {

    const [inputValue, setInputValue] = useState('');

    const history = useHistory();

    const handleBackClick = () => {
        history.push('/');
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddUserClick = () => {
        if (inputValue.length !== 0) {
            addUser(new User(inputValue));
        }
    }

    return (
        <div className='add-users'>
            <IconButton aria-label="back" onClick={ handleBackClick }>
                <KeyboardBackspaceIcon color='secondary' className='icon' fontSize="large" />
            </IconButton>
            <div>
                <div className='description'>
                    <h1>Add Players:</h1>
                </div>
                <div className='input-wrapper'>
                    <TextField className='user-input' label="Player Name" variant="filled" onChange={ handleInputChange } />
                    <Fab color="primary" onClick={ handleAddUserClick }>
                        <AddIcon />
                    </Fab>
                </div>
            </div>
            <div className='user-list'>
                { users.map(user => (
                    <UserCard key={ user.id } user={ user } removeUser={ removeUser } />
                ))}
            </div>
        </div>
    )
}

export default AddUsersPage
