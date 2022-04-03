import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'

export const GiftContext = React.createContext('ring');

const GrandPa = () => {
    const [house, setHouse] = useState(1)
    const ornamemnt = 'Diamond Ring';
    const gift = 'diamond';
    const increaseHouse = () =>{
        let newhouse = house + 1;
        setHouse(newhouse);
    }
    return (
        <GiftContext.Provider value={ornamemnt}>
             <div className='grandpa' >
                <h5>Grandpa</h5>
                <p>House: {house}</p>
                <button onClick={()=>increaseHouse()}>Buy a house</button>
            <div style={{display: 'flex'}}>
            <Father house={house}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </div>
            </div>
        </GiftContext.Provider>
    );
};

export default GrandPa;