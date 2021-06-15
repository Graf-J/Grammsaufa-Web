import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import Generator from './Generator';
import './MainPage.css';

function MainPage() {
    const [number, setNumber] = useState('Click');
    const [min, setMin] = useState(30);
    const [max, setMax] = useState(200);

    const history = useHistory();

    const handleInfoClick = () => {
        history.push('/info')
    }

    const handleRestartGameClick = () => {
        console.log('Restart Game');
    }

    const handleAddUsersClick = () => {
        history.push('/add-users');
    }

    return (
        <div className='main-page'>
            <Generator 
                number={ number } 
                setNumber={ setNumber }
                min={ min } 
                setMin={ setMin }
                max={ max } 
                setMax={ setMax } />
            <div className='button-wrapper'>
                <Fab color="primary" onClick={ handleInfoClick }>
                    <FormatListNumberedIcon />
                </Fab>
                <Button variant="contained" color="secondary" onDoubleClick={ handleRestartGameClick }>
                    Restart Game
                </Button>
                <Fab color="primary" onClick={ handleAddUsersClick }>
                    <AddIcon />
                </Fab>
            </div>
        </div>
    )
}

export default MainPage
