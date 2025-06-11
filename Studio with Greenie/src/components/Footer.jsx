import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Isolated footer styling to ensure consistency across devices
function Footer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    // Track window width for responsiveness
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Determine if mobile view
    const isMobile = windowWidth <= 768;
    const isTablet = windowWidth <= 992 && windowWidth > 768;
    const isDesktop = windowWidth > 992;
    
    // Isolated footer styles
const footerStyles = {
    footer: {
        backgroundColor: '#000',
        padding: '1.5rem 0',
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        boxShadow: '0 -2px 10px rgba(0, 255, 0, 0.3)',
        borderTop: '2px solid #00FF00',
        marginTop: '2rem',
        textAlign: 'left'
    },
    footerContent: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '0 0.5rem', // Reduced padding for more space
        textAlign: 'center'
    },
    footerLinks: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: isMobile ? '0.5rem' : '2rem', // Smaller gap on mobile
        textAlign: 'center',
        width: '100%'
    },
    footerLink: {
        color: '#00FF00',
        textDecoration: 'none', 
        fontSize: isMobile ? '0.7rem' : '1.1rem', // Smaller text on mobile
        fontWeight: '500',
        transition: 'all 0.3s ease',
        textTransform: 'uppercase',
        letterSpacing: isMobile ? '0.5px' : '1px', // Reduced letter spacing on mobile
        whiteSpace: 'nowrap' // Prevent individual links from wrapping
    },
    footerCopyright: {
        color: '#888',
        fontSize: isMobile ? '0.65rem' : '1rem', // Smaller text on mobile
        textAlign: 'center',
        marginTop: '1.5rem',
        maxWidth: '95%',
        margin: '1.5rem auto 0'
    }
};
    return (
        <footer style={footerStyles.footer}>
            <div style={footerStyles.footerContent}>
                <div style={footerStyles.footerLinks}>
                    <Link to="/" style={footerStyles.footerLink}>Home</Link>
                    <Link to="/terms" style={footerStyles.footerLink}>Terms & Conditions</Link>
                    <Link to="/process" style={footerStyles.footerLink}>Studio Process</Link>
                    <Link to="/faq" style={footerStyles.footerLink}>FAQ</Link>
                </div>
                <div style={footerStyles.footerCopyright}>
                © {new Date().getFullYear()} DJ Greenie Studio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;