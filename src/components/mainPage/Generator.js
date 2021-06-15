import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import './Generator.css';

function Generator({ number, setNumber, min, setMin, max, setMax }) {
    const [color, setColor] = useState('#222');

    const handleButtonClick = (e) => {
        setNumber(Math.floor(Math.random() * (max - min) + min));
    }

    const onTouchStart = (e) => {
        setColor('#000');
    }

    const onTouchEnd = (e) => {
        setColor('#222');
    }

    let rnd_button = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `${ color }`,
        color: 'orange',
        height: '160px',
        width: '160px',
        borderRadius: '80px'
    }

    return (
        <div className="generator">
            <TextField label="Min" className="limiter" value={ min } onChange={ (e) => setMin(e.target.value)} />
            <div style={ rnd_button } className='rnd-button' aria-haspopup="true" onClick={ handleButtonClick } onTouchStart={ onTouchStart } onTouchEnd={ onTouchEnd }>
                <h1>{ number }</h1>
            </div>
            <TextField label="Max" className="limiter" value={ max } onChange={ (e) => setMax(e.target.value) } />
        </div>
    )
}

export default Generator
