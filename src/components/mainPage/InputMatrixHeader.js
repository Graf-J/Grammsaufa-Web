import React from 'react';
import './InputMatrixHeader.css';

function InputMatrixHeader({ users }) {
    let nameTag = {
        // Get the optimal width of a NameTag
        width: `${ (window.innerWidth * 0.85) / users.length }px`,
        textAlign: 'center'
    }

    return (
        <div className='input-matrix-header'>
            <div className='name-section'>
                { users.map(user => (
                    <div key={ user.id } style={ nameTag }>
                        <p className='user-name'>{ user.name }</p>
                    </div>
                ))}
            </div>
            <div className='placeholder'></div>
        </div>
    )
}

export default InputMatrixHeader
