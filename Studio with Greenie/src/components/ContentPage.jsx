import React, { useState, useEffect, useRef } from 'react';

// Shared ContentPage wrapper component with fixes for header overlap and footer sizing
const ContentPage = ({ children, title }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [headerHeight, setHeaderHeight] = useState(650); // Default header height
    const pageRef = useRef(null); // Reference to the content page element
    
    // SUPER AGGRESSIVE SCROLL TO TOP WITH HEADER AWARENESS
    useEffect(() => {
        console.log("ContentPage mounted - forcing scroll to top");
        
        // Get header height for proper scrolling
        const header = document.querySelector('.header');
        const actualHeaderHeight = header ? header.offsetHeight : headerHeight;
        
        // Brute force approach with header awareness
        const forceScrollToTop = () => {
            // Basic scrolling but positioning BELOW the header
            window.scrollTo(0, 0);
            
            // Log actual position
            console.log("Scroll position:", window.scrollY, "Header height:", actualHeaderHeight);
        };
        
        // Execute immediately
        forceScrollToTop();
        
        // And also after delays to catch any layout shifts
        const timeoutId = setTimeout(forceScrollToTop, 100);
        const timeoutId2 = setTimeout(forceScrollToTop, 500);
        
        return () => {
            clearTimeout(timeoutId);
            clearTimeout(timeoutId2);
        };
    }, [title, headerHeight]); // Re-run when title changes
    
    // Track window width for responsiveness
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Calculate header height on load and on resize
    useEffect(() => {
        function calculateHeaderHeight() {
            const header = document.querySelector('.header');
            if (header) {
                // Get actual header height plus padding
                const height = header.offsetHeight + 20; // Reduced padding
                setHeaderHeight(height);
            } else {
                // Fallback values based on screen size
                if (windowWidth > 1200) setHeaderHeight(650);
                else if (windowWidth > 992) setHeaderHeight(500);
                else if (windowWidth > 768) setHeaderHeight(400);
                else if (windowWidth > 480) setHeaderHeight(300);
                else setHeaderHeight(220);
            }
        }
        
        // Calculate on mount
        calculateHeaderHeight();
        
        // Calculate on resize
        window.addEventListener('resize', calculateHeaderHeight);
        
        // Calculate again after page fully loads
        window.addEventListener('load', calculateHeaderHeight);
        
        return () => {
            window.removeEventListener('resize', calculateHeaderHeight);
            window.removeEventListener('load', calculateHeaderHeight);
        };
    }, [windowWidth]);

    // Fix footer size on content pages
    useEffect(() => {
        // Target footer links to ensure consistent sizing
        const footerLinks = document.querySelectorAll('.footer-link');
        const footerCopyright = document.querySelector('.footer-copyright');
        
        // Apply consistent sizing
        if (footerLinks.length > 0) {
            footerLinks.forEach(link => {
                // Ensure desktop sizing matches homepage
                if (windowWidth > 992) {
                    link.style.fontSize = '2.5rem';
                }
            });
        }
        
        if (footerCopyright) {
            // Ensure desktop sizing matches homepage
            if (windowWidth > 992) {
                footerCopyright.style.fontSize = '1.8rem';
            }
        }
        
        // No cleanup needed
    }, [windowWidth]);
    
    // Determine which breakpoint we're at
    const isDesktop = windowWidth > 992;
    const isTablet = windowWidth <= 992 && windowWidth > 480;
    const isMobile = windowWidth <= 480;
    
    // Isolated styling for content pages
    const styles = {
        contentPage: {
            marginTop: `${headerHeight}px`,
            paddingTop: '2rem',
            minHeight: '100vh',
            backgroundColor: '#000',
            color: 'white',
            fontSize: '1rem',
        },
        contentContainer: {
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            padding: '2rem 0',
        },
        contentTitle: {
            fontSize: '2rem',
            color: '#00FF00',
            textAlign: 'center',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontFamily: 'Akira Expanded, sans-serif',
            textShadow: '0 0 10px rgba(0, 255, 0, 0.7)',
        },
        contentSection: {
            marginBottom: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: isTablet || isMobile ? '1rem' : '2rem',
            borderRadius: '15px',
            border: '2px solid rgba(0, 255, 0, 0.3)',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.1)',
        },
        h2: {
            color: '#00FF00',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid rgba(0, 255, 0, 0.3)',
            paddingBottom: '0.5rem',
        },
        p: {
            marginBottom: '1rem',
            lineHeight: 1.6,
            fontSize: '1rem',
        }
    };
    
    return (
        <div ref={pageRef} style={styles.contentPage} id="content-page-top">
            <div style={styles.contentContainer}>
                <h1 style={styles.contentTitle}>{title}</h1>
                {children(styles)}
            </div>
        </div>
    );
};

export default ContentPage;