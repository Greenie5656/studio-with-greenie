import React, { useEffect, useState } from 'react';

const successStyles = {
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    successContent: {
      backgroundColor: 'black',
      border: '3px solid #00FF00',
      borderRadius: '15px',
      padding: '2rem',
      position: 'relative',
      width: '90%',
      maxWidth: '500px',
      color: 'white',
      textAlign: 'center',
      boxShadow: '0 0 30px rgba(0, 255, 0, 0.5)',
    },
    successIcon: {
      fontSize: '4rem',
      color: '#00FF00',
      marginBottom: '1rem',
      display: 'inline-block',
      border: '3px solid #00FF00',
      borderRadius: '50%',
      width: '80px',
      height: '80px',
      lineHeight: '74px',
    },
    h2: {
      fontSize: '2.5rem',
      textAlign: 'center',
      color: '#00FF00',
      marginBottom: '1.5rem',
      fontFamily: 'Akira Expanded, sans-serif',
      letterSpacing: '2px',
    },
    successService: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    successMessage: {
      fontSize: '1.2rem',
      marginBottom: '1.5rem',
    },
    paymentInfo: {
      fontSize: '1rem',
      marginBottom: '1.5rem',
      opacity: 0.8,
    },
    countdownContainer: {
      marginTop: '2rem',
    },
    countdownBar: {
      height: '10px',
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
      borderRadius: '5px',
      overflow: 'hidden',
      marginTop: '0.5rem',
      position: 'relative',
    },
    countdownProgress: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      backgroundColor: '#00FF00',
      animation: 'countdown 10s linear forwards',
    },
    closeSuccessButton: {
      marginTop: '1.5rem',
      padding: '0.8rem 2rem',
      backgroundColor: '#00FF00',
      color: 'black',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)',
      fontFamily: 'Akira Expanded, sans-serif',
      letterSpacing: '1px',
    }
  };

  function IsolatedSuccessMessage({ service, onClose }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    // Track window width for responsiveness
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Determine if mobile view
    const isMobile = windowWidth <= 768;
    
    // Responsive styles for modal
    const responsiveSuccessStyle = {
      ...successStyles.successContent,
      width: isMobile ? '90%' : '50%',
      minWidth: isMobile ? 'auto' : '400px',
      maxWidth: isMobile ? '400px' : '500px',
      padding: isMobile ? '1.5rem' : '2rem',
      transform: isMobile ? 'scale(1)' : 'scale(1)',
    };
    
    const responsiveH2Style = {
      ...successStyles.h2,
      fontSize: isMobile ? '1.8rem' : '2.5rem',
    };
  
    // Auto close after 10 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 10000);
      
      return () => clearTimeout(timer);
    }, [onClose]);
  
    return (
      <div style={successStyles.modalOverlay}>
        <div style={responsiveSuccessStyle}>
          <div style={successStyles.successIcon}>✓</div>
          <h2 style={responsiveH2Style}>Booking Confirmed!</h2>
          <p style={successStyles.successService}>
            Your {service.name} booking has been received
          </p>
          <p style={successStyles.successMessage}>
            Thanks for booking with DJ Greenie Studio. We'll be in touch via email shortly with next steps.
          </p>
          {service.name === 'Tracks' && (
            <p style={successStyles.paymentInfo}>
              Initial deposit of {service.deposit} has been received.
              The remaining balance will be due upon completion.
            </p>
          )}
          <div style={successStyles.countdownContainer}>
            <p>This window will close automatically</p>
            <div style={successStyles.countdownBar}>
              <style>
                {`
                  @keyframes countdown {
                    from { width: 100%; }
                    to { width: 0%; }
                  }
                `}
              </style>
              <div style={successStyles.countdownProgress}></div>
            </div>
          </div>
          <button style={successStyles.closeSuccessButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
  
  export default IsolatedSuccessMessage;

