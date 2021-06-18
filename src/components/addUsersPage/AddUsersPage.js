import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import UserCard from './UserCard';
import useLocalStorage from '../../hooks/useLocalStorage';
import User from '../../models/User';
import './AddUsersPage.css';

function AddUsersPage() {

    const [inputValue, setInputValue] = useState('');
    const [users, setUsers] = useState([]);

    const [localUsers, setLocalUsers] = useLocalStorage('users', '');

    const history = useHistory();

    useEffect(() => {
        if (localUsers.length > 2) {
            setUsers(JSON.parse(localUsers));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setLocalUsers(JSON.stringify(users));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [users])

    const handleBackClick = () => {
        history.push('/');
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddUserClick = () => {
        if (inputValue.length !== 0) {
            let newUser = new User(inputValue);
            // Increase User.ID depending on the ID of the last User in the List
            if (users.length !== 0) {
                newUser.id = users[users.length - 1].id + 1;
            }
            setUsers(prevUsers => [...prevUsers, newUser]);
            setInputValue('');
        }
    }

    const removeUser = (user) => {
      setUsers(users.filter(curUser => user.id !== curUser.id))
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
                    <TextField className='user-input' value={ inputValue } label="Player Name" variant="filled" onChange={ handleInputChange } />
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
