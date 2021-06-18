import React from 'react';
import TextField from '@material-ui/core/TextField';
import './InputMatrixBody.css';

function InputMatrixBody({ users, setUsers, rounds, setRounds }) {

    const updateUsers = (value, i, j) => {
        let newUsers = [...users];
        if (value) {
            newUsers[j].weights[i] = parseInt(value);
        }
        else {
            newUsers[j].weights[i] = value;
        }
        setUsers(newUsers);
    }

    const updateRounds = (value, i, j) => {
        let newRounds = [...rounds];
        if (value) {
            newRounds[i].values[j] = parseInt(value);
        }
        else {
            newRounds[i].values[j] = value;
        }
        setRounds(newRounds);
    }

    const handleInputChange = (e, i, j) => {
        let value = e.target.value;
        updateUsers(value, i, j);
        updateRounds(value, i, j);
    }

    const handleInputBlur = (e, i, j) => {
        let value = e.target.value;
        if (!value) {
            value = 0;
            updateUsers(value, i, j);
            updateRounds(value, i, j);
        }
    }

    return (
        <div className='input-matrix-body'>
            { rounds.map((round, i) => (
                <div key={ round.id } className='input-section-wrapper'>
                    <div className='input-section'>
                        { users.map((user, j) => (
                            <TextField key={ user.id } value={ rounds[i].values[j] } type='number' inputProps={ {min: 0, style: { textAlign: 'center' }} } onChange={ (e) => handleInputChange(e, i, j) } onBlur={ (e) => handleInputBlur(e, i, j) } />
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
