import React, { useContext } from 'react';
import { GiftContext } from '../GrandPa/GrandPa';

const Special = () => {
    const ring = useContext(GiftContext)
    return (
        <div>
            <h5>special</h5>
            <p><small>Gift: {ring}</small></p>
        </div>
    );
};

export default Special;