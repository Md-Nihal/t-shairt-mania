import React, { useContext } from 'react';
import { GiftContext } from '../GrandPa/GrandPa';

const Aunty = () => {
    const gift = useContext(GiftContext)
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>Ring: {gift}</small></p>
        </div>
    );
};

export default Aunty;