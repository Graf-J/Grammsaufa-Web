import React, { useState } from 'react';
import Generator from './Generator';

function MainPage() {
    const [number, setNumber] = useState('Click');
    const [min, setMin] = useState(30);
    const [max, setMax] = useState(200);

    return (
        <div>
            <Generator 
                number={ number } 
                setNumber={ setNumber }
                min={ min } 
                setMin={ setMin }
                max={ max } 
                setMax={ setMax } />
        </div>
    )
}

export default MainPage
