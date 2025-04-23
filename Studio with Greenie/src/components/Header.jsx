import React from 'react';
import '../components/Header.css'
import logo from '../assets/logo.png';
import remixedLogo from '../assets/remixed-logo.png'

function Header() {
    return (
        <header className="header">
            <div className='studio-text'>BOOK THE STUDIO WITH</div>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo pulse" />
                <img src={remixedLogo} alt="remixed for mos, aatw, bcd and dinky records" className='remixed-logo' />
            </div>
        </header>
    );
}

export default Header;