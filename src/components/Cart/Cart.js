import React from 'react';
import './Cart.css'
const Cart = ({removeFromcart, cart}) => {
    // condions(rendering options)
   
    // 1- Element variable
    // 2- ternary operator (condition ? true : false) ;
    // 3- && operator(shorthand)
    // 4- || operator(shorthand)
    let command;
    if(cart.length === 0){
        command = <p>Please add atleaset 1 items</p>
    }
    else if(cart.length ===1){
        command = <p>Please add more...</p>
    }
    else{
        command = <p><small>Thanks for adding items</small></p>
    }
    
    return (
        <div>
            <h2>This is Cart</h2>
            
            {
                cart.map(tShirt=> <p>
                    {tShirt.name}
                    <button onClick={()=>removeFromcart(tShirt)}>x</button></p>)
            }
            {cart.length === 3 && <div className='orange'>
                <h5>trigonal</h5>
                <p>3 is your lucky number</p>
                </div>}
            {command}
            {cart.length === 0 || <p className='orange'>Yay!! youre buying</p>}
            {cart.length !== 4 ? <p>keep adding..</p> : <button>remove all</button>}
            {cart.length ===4 && <button className='orange'>review order</button>}
        </div>
    );
};

export default Cart;