import React from 'react';
import InputMatrixHeader from './InputMatrixHeader';
import InputMatrixBody from './InputMatrixBody';

function InputMatrix({ users, rounds, setRounds }) {
    return (
        <div className='input-matrix'>
            <InputMatrixHeader users={ users } />
            <InputMatrixBody users={ users } rounds={ rounds } setRounds={ setRounds } />
        </div>
    )
}

export default InputMatrix
