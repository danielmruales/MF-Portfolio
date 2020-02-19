import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='mainNav'>
                <Link to='/' className='navLogo'>
                    <img src={Logo} alt='logo' className='logo'/>
                </Link>
            <div className='navItemsContainer'>
                <Link to='/'className='navItems'>Home</Link>
                <Link to='/innovation' className='navItems'> Innovation </Link>
                <Link to='/about' className='navItems'>About</Link>
                <Link to='/contact' className='navItems'> Contact </Link>
            </div>
        </div>
    );
};

export default Navbar;