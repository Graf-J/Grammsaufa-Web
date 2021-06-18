import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import './Generator.css';

function Generator({ generateRound, rounds }) {
    const [color, setColor] = useState('#222');
    const [min, setMin] = useState(30);
    const [max, setMax] = useState(200);
    const [number, setNumber] = useState('Click');

    useEffect(() => {
        if (rounds.length !== 0) {
            setNumber(rounds[0].expectation);
        }
        else {
            setNumber('Click');
        }
    }, [rounds])

    const handleButtonClick = (e) => {
        const rndNumber = Math.floor(Math.random() * (max - min) + min);
        setNumber(rndNumber);
        generateRound(rndNumber);
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
            <TextField label="Min" className="limiter" value={ min } inputProps={{min: 0, style: { textAlign: 'center' }}} onChange={ (e) => setMin(e.target.value)} />
            <div style={ rnd_button } className='rnd-button' aria-haspopup="true" onClick={ handleButtonClick } onTouchStart={ onTouchStart } onTouchEnd={ onTouchEnd }>
                <h1>{ number }</h1>
            </div>
            <TextField label="Max" className="limiter" value={ max } inputProps={{min: 0, style: { textAlign: 'center' }}} onChange={ (e) => setMax(e.target.value) } />
        </div>
    )
}

export default Generator
