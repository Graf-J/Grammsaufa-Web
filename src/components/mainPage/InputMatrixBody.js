import React from 'react';
import TextField from '@material-ui/core/TextField';
import './InputMatrixBody.css';

function InputMatrixBody({ users, setUsers, rounds, setRounds }) {

    const handleInputChange = (e, i, j) => {
        // ToDo Validate Input
        const value = e.target.value;
        // Modify Users
        let newUsers = [...users];
        newUsers[j].weights[i] = value;
        setUsers(newUsers);
        // Modify Rounds
        let newRounds = [...rounds];
        newRounds[i].values[j] = value;
        setRounds(newRounds);
    }

    return (
        <div className='input-matrix-body'>
            { rounds.map((round, i) => (
                <div key={ round.id } className='input-section-wrapper'>
                    <div className='input-section'>
                        { users.map((user, j) => (
                            <TextField key={ user.id } value={ rounds[i].values[j] } inputProps={ {min: 0, style: { textAlign: 'center' }} } onChange={ (e) => handleInputChange(e, i, j) } />
                        ))}
                    </div>
                    <div className='expectation-wrapper'>
                        <div className='expectation'>
                            <b>{ round.expectation }</b>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InputMatrixBody
