import React from 'react';
import '../components/Header.css'
import logo from '../assets/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo pulse" />
            </div>
        </header>
    );
}

export default Header;