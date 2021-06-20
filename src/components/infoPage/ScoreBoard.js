import React, { useState, useEffect } from 'react';
import ScoreBoardHeader from './ScoreBoardHeader';
import ScoreBoardBody from './ScoreBoardBody';
import './ScoreBoard.css';

function ScoreBoard({ users }) {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        let tableRows = [];
        users.forEach(user => {
            tableRows.push({
                id: user.id,
                name: user.name,
                points: user.totalPoints,
                weight: user.totalWeight
            })
        })
        tableRows.sort((a, b) => a.points > b.points ? -1 : 1);
        setRows(tableRows);
    }, [users])

    const sortByName = () => {
        let tableRows = [...rows];
        tableRows.sort((a, b) => a.name > b.name ? 1 : -1);
        setRows(tableRows);
    }

    const sortByPoints = () => {
        let tableRows = [...rows];
        tableRows.sort((a, b) => a.points > b.points ? -1 : 1);
        setRows(tableRows);
    }

    const sortByWeight = () => {
        let tableRows = [...rows];
        tableRows.sort((a, b) => a.weight > b.weight ? -1 : 1);
        setRows(tableRows);
    }

    return (
        <div className='scoreboard'>
            <ScoreBoardHeader sortByName={ sortByName } sortByPoints={ sortByPoints } sortByWeight={ sortByWeight } />
            <ScoreBoardBody rows={ rows } />
        </div>
    )
}

export default ScoreBoard
