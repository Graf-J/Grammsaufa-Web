import React from 'react';
import InputMatrixHeader from './InputMatrixHeader';
import InputMatrixBody from './InputMatrixBody';

function InputMatrix({ users, setUsers, rounds, setRounds }) {
    return (
        <div className='input-matrix'>
            <InputMatrixHeader users={ users } />
            <InputMatrixBody users={ users } setUsers={ setUsers } rounds={ rounds } setRounds={ setRounds } />
        </div>
    )
}

export default InputMatrix
