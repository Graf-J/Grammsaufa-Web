import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import './Generator.css';

function Generator({ generateRound }) {
    const [color, setColor] = useState('#222');
    const [min, setMin] = useState(30);
    const [max, setMax] = useState(200);
    const [number, setNumber] = useState('Click');

    useEffect(() => {
        console.log('Moni');
    }, [])

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
            <TextField label="Min" className="limiter" value={ min } onChange={ (e) => setMin(e.target.value)} />
            <div style={ rnd_button } className='rnd-button' aria-haspopup="true" onClick={ handleButtonClick } onTouchStart={ onTouchStart } onTouchEnd={ onTouchEnd }>
                <h1>{ number }</h1>
            </div>
            <TextField label="Max" className="limiter" value={ max } onChange={ (e) => setMax(e.target.value) } />
        </div>
    )
}

export default Generator
