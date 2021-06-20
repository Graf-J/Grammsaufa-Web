import React, { useState } from 'react';
import './ScoreBoardHeader.css';

function ScoreBoardHeader({ sortByName, sortByPoints, sortByWeight }) {

    const [isSortedByName, setIsSortedByName] = useState(false);
    const [isSortedByPoints, setIsSortedByPoints] = useState(true);
    const [isSortedByWeight, setIsSortedByWeight] = useState(false);

    const handleNameClick = () => {
        sortByName();
        setIsSortedByName(true);
        setIsSortedByPoints(false);
        setIsSortedByWeight(false);
    }

    const handlePointsClick = () => {
        sortByPoints();
        setIsSortedByName(false);
        setIsSortedByPoints(true);
        setIsSortedByWeight(false);
    }

    const handleWeightClick = () => {
        sortByWeight();
        setIsSortedByName(false);
        setIsSortedByPoints(false);
        setIsSortedByWeight(true);
    }

    return (
        <div className='scoreboard-header'>
           <p onClick={ handleNameClick } style={ isSortedByName ? { fontWeight: 'bold' } : { fontWeight: 'normal' } }>Name</p>
           <p onClick={ handlePointsClick } style={ isSortedByPoints ? { fontWeight: 'bold' } : { fontWeight: 'normal' } }>Punkte</p>
           <p onClick={ handleWeightClick } style={ isSortedByWeight ? { fontWeight: 'bold' } : { fontWeight: 'normal' } }>Gramm</p>
        </div>
    )
}

export default ScoreBoardHeader
