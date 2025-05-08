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
            padding: isDesktop ? '2rem 1rem' : isTablet ? '1.5rem 1rem' : '1rem',
            width: '100%',
            boxShadow: '0 -2px 10px rgba(0, 255, 0, 0.3)',
            borderTop: '2px solid #00FF00',
            marginTop: '2rem',
            transform: isDesktop ? 'scale(1.4)' : 'scale(1)', // Scale consistently
            transformOrigin: 'center bottom'
        },
        footerContent: {
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
        },
        footerLinks: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: isDesktop ? '2rem' : isTablet ? '1.5rem' : '1rem',
            flexDirection: windowWidth <= 480 ? 'column' : 'row'
        },
        footerLink: {
            color: '#00FF00',
            textDecoration: 'none',
            fontSize: isDesktop ? '2rem' : isTablet ? '1.4rem' : '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        },
        footerCopyright: {
            color: '#888',
            fontSize: isDesktop ? '1.5rem' : isTablet ? '1.2rem' : '1rem',
            textAlign: 'center',
            marginTop: '1rem'
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