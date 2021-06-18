import React from 'react';
import TextField from '@material-ui/core/TextField';
import './InputMatrixBody.css';

function InputMatrixBody({ users, rounds, setRounds }) {

    const handleInputChange = (e, i, j) => {
        // ToDo Validate Input
        const value = e.target.value;
        // Modify Rounds
        let newRounds = [...rounds];
        newRounds[i].values[j] = value;
        setRounds(newRounds);
    }

    const handleInputBlur = () => {
        console.log('Save to LocalStorage!');
    }

    return (
        <div className='input-matrix-body'>
            { rounds.map((round, i) => (
                <div key={ round.id } className='input-section-wrapper'>
                    <div className='input-section'>
                        { users.map((user, j) => (
                            <TextField key={ user.id } value={ rounds[i].values[j] } inputProps={ {min: 0, style: { textAlign: 'center' }} } onChange={ (e) => handleInputChange(e, i, j) } onBlur={ handleInputBlur } />
                        ))}
                    </div>
                    <div className='expectation-wrapper'>
                        <div className='expectation'>
                            { round.expectation }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default InputMatrixBody
