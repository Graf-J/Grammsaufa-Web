import React from 'react';
import './ScoreBoardBody.css';

function ScoreBoardBody({ rows }) {
    return (
        <div className='scoreboard-body'>
            { rows.map(row => (
                <div key={ row.id } className='scoreboard-row'>
                    <div className='column-left'>
                        <p>{ row.name }</p>
                    </div>
                    <div className='column-middle'>
                        <p>{ row.points }</p>
                    </div>
                    <div className='column-right'>
                        <p>{ row.weight }</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ScoreBoardBody
