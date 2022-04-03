import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Welcome to T-shirt Mania!!!</h2>

            <nav className='nav-bar'>
                <CustomLink to="/Home" >Home</CustomLink>
                <CustomLink to="/orderreview">Order review</CustomLink>
                <CustomLink to="/grandpa">GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;