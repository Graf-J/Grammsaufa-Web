import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './UserCard.css';

function UserCard({ user, removeUser }) {

    const handleRemoveUserClick = () => {
        removeUser(user);
    }

    return (
        <div className='user-card'>
            <h1>{ user.name }</h1>
            <IconButton aria-label="delete" color='secondary' onClick={ handleRemoveUserClick }>
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default UserCard
