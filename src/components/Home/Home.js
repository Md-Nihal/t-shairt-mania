import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'
import useTshirt from '../useTshirt/useTshirt';

const Home = () => {
    const [tShirts, setTshirts] = useTshirt();
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItems) =>{
         const exists = cart.find(tShirt=> tShirt._id === selectedItems._id)
         if(!exists){
            const newCart = [...cart, selectedItems]
            setCart(newCart)
         }
        else{
            alert ('this item already added');
        }
    }

    const removeFromcart = (selectedItems) =>{
        const rest = cart.filter(tshirt=> tshirt._id !== selectedItems._id)
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
            {
                tShirts.map(tShirt => <TShirt
                    key={tShirt._id}
                    tShirt = {tShirt}
                    handleAddToCart={handleAddToCart}
                ></TShirt>)
            }
            </div>
            <div className='cart-container'>
            <Cart
            
            removeFromcart={removeFromcart}
            cart={cart}
            ></Cart>
            </div>
            
        </div>
    );
};

export default Home;