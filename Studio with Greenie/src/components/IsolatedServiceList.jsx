import React, { useState, useEffect } from 'react';


// Card styles with very large 1300px fixed dimensions
const cardStyles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '3rem',
    borderRadius: '15px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    // Massive fixed dimensions - 1300px per card
    width: '1300px',
    height: '1300px',
    margin: '0 2rem',
    backgroundColor: 'black',
    border: '5px solid #00FF00', // Thicker green border
  },
  tracks: {
    backgroundColor: 'black',
    borderColor: '#00FF00',
  },
  mastering: {
    backgroundColor: 'black',
    borderColor: '#00FF00',
  },
  lessons: {
    backgroundColor: 'black',
    borderColor: '#00FF00',
  },
  midis: {
    backgroundColor: 'black',
    borderColor: '#00FF00',
  },
  button: {
    padding: '1.2rem 3rem',
    fontSize: '5rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    backgroundColor: '#00FF00', // Green button
    color: 'black', // Black text
    fontFamily: 'Akira Expanded, sans-serif',
    letterSpacing: '2px',
    marginTop: 'auto',
    marginBottom: '2rem',
    zIndex: 1,
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 0 25px rgba(0, 255, 0, 0.7)',
  },
  buttonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 0 40px rgba(0, 255, 0, 1)',
  },
  h2: {
    fontSize: '8rem', // Much larger font size
    margin: '1.5rem 0',
    fontFamily: 'Akira Expanded, sans-serif',
    letterSpacing: '3px',
    zIndex: 1,
    color: '#00FF00', // Green text
  },
  price: {
    fontSize: '5rem', // Much larger font size
    fontWeight: 'bold',
    margin: '2rem 0 3rem 0',
    zIndex: 1
  },
  description: {
    margin: '1.5rem 0',
    fontSize: '3rem', // Much larger font size
    maxWidth: '85%',
    zIndex: 1,
    lineHeight: 1.4
  },
  delivery: {
    fontSize: '3rem', // Much larger font size
    marginTop: 'auto',
    marginBottom: '1.5rem',
    opacity: 0.8,
    zIndex: 1
  },
  icon: {
    fontSize: '9rem', // Much larger font size
    marginTop: '2rem',
    zIndex: 1
  }
};

// Responsive adjustments for mobile
const getMobileCardStyles = (windowWidth) => {
  if (windowWidth <= 480) {
    // Extra small devices
    return {
      width: '90vw', // Use viewport width instead of fixed pixels
      maxWidth: '350px', // Add a max-width for safety
      height: 'auto',
      minHeight: '450px',
      padding: '1rem',
      margin: '0 auto', // Center the card
      h2: { fontSize: '2rem' },
      price: { fontSize: '1.5rem' },
      description: { fontSize: '1rem', lineHeight: '1.4' },
      delivery: { fontSize: '0.9rem' },
      icon: { fontSize: '2.5rem' },
      button: { fontSize: '1rem', padding: '0.7rem 1.5rem' }
    };
  } else if (windowWidth <= 768) {
    // Standard mobile devices
    return {
      width: '90vw', // Use viewport width instead of fixed pixels
      maxWidth: '400px', // Add a max-width for safety
      height: 'auto',
      minHeight: '500px',
      padding: '1.5rem',
      margin: '0 auto', // Center the card
      h2: { fontSize: '2.5rem' },
      price: { fontSize: '1.8rem' },
      description: { fontSize: '1.2rem', lineHeight: '1.5' },
      delivery: { fontSize: '1rem' },
      icon: { fontSize: '3rem' },
      button: { fontSize: '1.2rem', padding: '0.8rem 2rem' }
    };
  }
  return {};
};


const modalStyles = {
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
      padding: '20px', // Add padding to prevent content touching edges on mobile
    },
    modalContent: {
      backgroundColor: 'black',
      border: '3px solid #00FF00',
      borderRadius: '15px',
      padding: '2rem',
      position: 'relative',
      width: '90%',
      maxWidth: '500px', // Limit maximum width on larger screens
      minWidth: '300px', // Set minimum width for desktop
      color: 'white',
      boxShadow: '0 0 30px rgba(0, 255, 0, 0.5)',
      textAlign: 'center', // Center all content
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'none',
      border: 'none',
      color: '#00FF00',
      fontSize: '2rem',
      cursor: 'pointer',
    },
    h2: {
      fontSize: '2.5rem',
      textAlign: 'center',
      color: '#00FF00',
      marginBottom: '1.5rem',
      fontFamily: 'Akira Expanded, sans-serif',
      letterSpacing: '2px',
    },
    bookingDetails: {
      marginBottom: '2rem',
      textAlign: 'center', // Ensure centered text
    },
    bookingService: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    bookingPrice: {
      fontSize: '1.2rem',
      marginBottom: '1rem',
    },
    bookingPaymentTerms: {
      fontSize: '1rem',
      marginBottom: '1rem',
      opacity: 0.8,
    },
    bookingTurnaround: {
      fontSize: '1rem',
      opacity: 0.8,
    },
    formGroup: {
      marginBottom: '1.5rem',
      width: '100%', // Ensure full width
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '1rem',
      textAlign: 'left', // Keep label left-aligned
    },
    input: {
      width: '100%',
      padding: '0.8rem',
      backgroundColor: 'rgba(0, 255, 0, 0.1)',
      border: '2px solid #00FF00',
      borderRadius: '5px',
      color: 'white',
      fontSize: '1rem',
      boxSizing: 'border-box', // Ensure padding doesn't affect width
    },
    bookNowButton: {
      width: '100%',
      padding: '1rem',
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
    },
    processingButton: {
      opacity: 0.7,
    }
  };

// Success message styles
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

// Isolated BookingModal component
function IsolatedBookingModal({ service, onClose }) {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
  const responsiveModalStyle = {
    ...modalStyles.modalContent,
    width: isMobile ? '90%' : '500px',        // Larger fixed width for desktop
    minWidth: isMobile ? 'auto' : '500px',    // Increased minimum width for desktop
    maxWidth: isMobile ? '400px' : '600px',   // Increased maximum width for desktop
    padding: isMobile ? '1.5rem' : '2.5rem',  // More padding on desktop
    transform: isMobile ? 'scale(1)' : 'scale(4)', // Scale up by 40% on desktop
    transformOrigin: 'center center',
  };
  
  const responsiveH2Style = {
    ...modalStyles.h2,
    fontSize: isMobile ? '1.8rem' : '2.5rem',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate processing
    setIsProcessing(true);
    
    // Log booking info to console
    console.log('Booking submitted:', {
      service: service.name,
      price: service.price,
      deposit: service.deposit,
      email: email
    });
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1500);
  };
  
  if (isSuccess) {
    return <IsolatedSuccessMessage service={service} onClose={onClose} />;
  }

  return (
    <div style={modalStyles.modalOverlay} onClick={onClose}>
      <div style={responsiveModalStyle} onClick={(e) => e.stopPropagation()}>
        <button style={modalStyles.closeButton} onClick={onClose}>×</button>
        
        <h2 style={responsiveH2Style}>Book {service.name}</h2>
        
        <div style={modalStyles.bookingDetails}>
          <p style={modalStyles.bookingService}>{service.name}</p>
          <p style={modalStyles.bookingPrice}>
            {service.name === 'Mastering' ? (
              <>
                Single Track: {service.singleTrackPrice}<br />
                Stem Mastering: {service.stemPrice}
              </>
            ) : service.name === 'Lessons' ? (
              <>
                DJ Lessons: {service.djPrice} / 30mins<br />
                Production Lessons: {service.productionPrice} / 30mins
              </>
            ) : (
              <>Price: {service.price}</>
            )}
          </p>
          
          {service.name === 'Tracks' && (
            <p style={modalStyles.bookingPaymentTerms}>
              Pay half now (£75) to book your slot and half when you're happy with the track
            </p>
          )}
          
          <p style={modalStyles.bookingTurnaround}>
            Estimated turnaround: {service.turnaround}
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div style={modalStyles.formGroup}>
            <label style={modalStyles.label} htmlFor="email">Email address</label>
            <input
              style={modalStyles.input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>
          
          <button 
            type="submit" 
            style={{
              ...modalStyles.bookNowButton,
              ...(isProcessing ? modalStyles.processingButton : {})
            }}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Book Now ${service.deposit ? `- ${service.deposit}` : ''}`}
          </button>
        </form>
      </div>
    </div>
  );
}

// Isolated SuccessMessage component
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
    transform: isMobile ? 'scale(1)' : 'scale(4)',
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

function IsolatedServiceList() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(650);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
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
        // Get actual header height plus some padding
        const height = header.offsetHeight + 20;
        setHeaderHeight(height);
      } else {
        // Fallback values based on screen size
        const width = window.innerWidth;
        if (width > 1200) setHeaderHeight(650);
        else if (width > 992) setHeaderHeight(300);
        else if (width > 768) setHeaderHeight(250);
        else if (width > 480) setHeaderHeight(200);
        else setHeaderHeight(140);
      }
    }
    
    // Calculate on mount
    calculateHeaderHeight();
    
    // Calculate on resize
    window.addEventListener('resize', calculateHeaderHeight);
    
    // Calculate again after page fully loads (for images, fonts, etc.)
    window.addEventListener('load', calculateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', calculateHeaderHeight);
      window.removeEventListener('load', calculateHeaderHeight);
    };
  }, []);
  
  // Determine if mobile view
  const isMobile = windowWidth <= 768;
  
  // Get responsive styles
  const mobileStyles = getMobileCardStyles(windowWidth);
  
  // Extra large container to fit 2 large cards per row
  const containerStyle = {
    width: '100%', // Changed from 100vw to 100%
    maxWidth: 'none',
    margin: '0 auto',
    marginTop: `${headerHeight}px`,
    marginBottom: '100px',
    padding: isMobile ? '0 10px' : '0 2vw', // Smaller padding on mobile
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center', // Added to help with centering
    gap: isMobile ? '2rem' : '4rem', // Smaller gap on mobile
    overflow: 'visible',
    boxSizing: 'border-box',
  };

  const handleBooking = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  
  // Row style to group cards in pairs
  const rowStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '4rem'
  };
  
  // Wrapper components with isolated styling
  const StyledTracksCard = () => {
    const trackService = {
      name: 'Tracks',
      price: '£150',
      deposit: '£75',
      description: 'Get your very own tracks produced and mastered by DJ Greenie',
      turnaround: '2 weeks'
    };
    
    // Merge base styles with mobile adjustments if needed
    const responsiveCardStyle = {
      ...cardStyles.base,
      ...cardStyles.tracks,
      ...(isMobile && { 
        width: mobileStyles.width,
        height: mobileStyles.height,
        minHeight: mobileStyles.minHeight,
        padding: mobileStyles.padding
      })
    };
    
    const responsiveH2Style = {
      ...cardStyles.h2,
      ...(isMobile && { fontSize: mobileStyles.h2.fontSize })
    };
    
    const responsivePriceStyle = {
      ...cardStyles.price,
      ...(isMobile && { fontSize: mobileStyles.price.fontSize })
    };
    
    const responsiveDescStyle = {
      ...cardStyles.description,
      ...(isMobile && { fontSize: mobileStyles.description.fontSize })
    };
    
    const responsiveDeliveryStyle = {
      ...cardStyles.delivery,
      ...(isMobile && { fontSize: mobileStyles.delivery.fontSize })
    };
    
    const responsiveIconStyle = {
      ...cardStyles.icon,
      ...(isMobile && { fontSize: mobileStyles.icon.fontSize })
    };
    
    return (
      <div style={responsiveCardStyle}>
        <div style={responsiveIconStyle}>🎵</div>
        <h2 style={responsiveH2Style}>TRACKS</h2>
        <div style={responsivePriceStyle}>{trackService.price}</div>
        <div style={responsiveDescStyle}>{trackService.description}</div>
        <div style={responsiveDeliveryStyle}>Turnaround: {trackService.turnaround}</div>
        <button 
          style={{
            ...cardStyles.button,
            ...(hoveredButton === 'tracks' ? cardStyles.buttonHover : {}),
            ...(isMobile && mobileStyles.button)
          }}
          onClick={() => handleBooking(trackService)}
          onMouseEnter={() => setHoveredButton('tracks')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          BOOK
        </button>
      </div>
    );
  };
  
  const StyledMasteringCard = () => {
    const masteringService = {
      name: 'Mastering',
      singleTrackPrice: '£25',
      stemPrice: '£75',
      price: 'From £25',
      deposit: '£25',
      description: 'Professional mastering services for your tracks',
      turnaround: '2 weeks'
    };
    
    // Merge base styles with mobile adjustments if needed
    const responsiveCardStyle = {
      ...cardStyles.base,
      ...cardStyles.mastering,
      ...(isMobile && { 
        width: mobileStyles.width,
        height: mobileStyles.height,
        minHeight: mobileStyles.minHeight,
        padding: mobileStyles.padding
      })
    };
    
    const responsiveH2Style = {
      ...cardStyles.h2,
      ...(isMobile && { fontSize: mobileStyles.h2.fontSize })
    };
    
    const responsivePriceStyle = {
      ...cardStyles.price,
      ...(isMobile && { fontSize: mobileStyles.price.fontSize })
    };
    
    const responsiveDescStyle = {
      ...cardStyles.description,
      ...(isMobile && { fontSize: mobileStyles.description.fontSize })
    };
    
    const responsiveDeliveryStyle = {
      ...cardStyles.delivery,
      ...(isMobile && { fontSize: mobileStyles.delivery.fontSize })
    };
    
    const responsiveIconStyle = {
      ...cardStyles.icon,
      ...(isMobile && { fontSize: mobileStyles.icon.fontSize })
    };
    
    return (
      <div style={responsiveCardStyle}>
        <div style={responsiveIconStyle}>🔊</div>
        <h2 style={responsiveH2Style}>MASTERING</h2>
        <div style={responsivePriceStyle}>{masteringService.price}</div>
        <div style={responsiveDescStyle}>
          Single Track: {masteringService.singleTrackPrice}<br />
          Stem Mastering: {masteringService.stemPrice}
        </div>
        <div style={responsiveDeliveryStyle}>Turnaround: {masteringService.turnaround}</div>
        <button 
          style={{
            ...cardStyles.button,
            ...(hoveredButton === 'mastering' ? cardStyles.buttonHover : {}),
            ...(isMobile && mobileStyles.button)
          }}
          onClick={() => handleBooking(masteringService)}
          onMouseEnter={() => setHoveredButton('mastering')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          BOOK
        </button>
      </div>
    );
  };
  
  const StyledLessonsCard = () => {
    const lessonsService = {
      name: 'Lessons',
      djPrice: '£25',
      productionPrice: '£20',
      price: 'From £20',
      deposit: '£20',
      description: 'One-on-one lessons with DJ Greenie',
      turnaround: '30 mins per session'
    };
    
    // Merge base styles with mobile adjustments if needed
    const responsiveCardStyle = {
      ...cardStyles.base,
      ...cardStyles.lessons,
      ...(isMobile && { 
        width: mobileStyles.width,
        height: mobileStyles.height,
        minHeight: mobileStyles.minHeight,
        padding: mobileStyles.padding
      })
    };
    
    const responsiveH2Style = {
      ...cardStyles.h2,
      ...(isMobile && { fontSize: mobileStyles.h2.fontSize })
    };
    
    const responsivePriceStyle = {
      ...cardStyles.price,
      ...(isMobile && { fontSize: mobileStyles.price.fontSize })
    };
    
    const responsiveDescStyle = {
      ...cardStyles.description,
      ...(isMobile && { fontSize: mobileStyles.description.fontSize })
    };
    
    const responsiveDeliveryStyle = {
      ...cardStyles.delivery,
      ...(isMobile && { fontSize: mobileStyles.delivery.fontSize })
    };
    
    const responsiveIconStyle = {
      ...cardStyles.icon,
      ...(isMobile && { fontSize: mobileStyles.icon.fontSize })
    };
    
    return (
      <div style={responsiveCardStyle}>
        <div style={responsiveIconStyle}>🎧</div>
        <h2 style={responsiveH2Style}>LESSONS</h2>
        <div style={responsivePriceStyle}>{lessonsService.price}</div>
        <div style={responsiveDescStyle}>
          DJ Lessons: {lessonsService.djPrice} / 30mins<br />
          Production Lessons: {lessonsService.productionPrice} / 30mins
        </div>
        <div style={responsiveDeliveryStyle}>Book your session today</div>
        <button 
          style={{
            ...cardStyles.button,
            ...(hoveredButton === 'lessons' ? cardStyles.buttonHover : {}),
            ...(isMobile && mobileStyles.button)
          }}
          onClick={() => handleBooking(lessonsService)}
          onMouseEnter={() => setHoveredButton('lessons')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          ENQUIRE
        </button>
      </div>
    );
  };
  
  const StyledMidiCard = () => {
    const midiService = {
      name: 'Bespoke MIDI',
      price: '£30',
      deposit: '£30',
      description: 'Get any riff recreated and delivered as a MIDI file',
      turnaround: '2 weeks'
    };
    
    // Merge base styles with mobile adjustments if needed
    const responsiveCardStyle = {
      ...cardStyles.base,
      ...cardStyles.midis,
      ...(isMobile && { 
        width: mobileStyles.width,
        height: mobileStyles.height,
        minHeight: mobileStyles.minHeight,
        padding: mobileStyles.padding
      })
    };
    
    const responsiveH2Style = {
      ...cardStyles.h2,
      ...(isMobile && { fontSize: mobileStyles.h2.fontSize })
    };
    
    const responsivePriceStyle = {
      ...cardStyles.price,
      ...(isMobile && { fontSize: mobileStyles.price.fontSize })
    };
    
    const responsiveDescStyle = {
      ...cardStyles.description,
      ...(isMobile && { fontSize: mobileStyles.description.fontSize })
    };
    
    const responsiveDeliveryStyle = {
      ...cardStyles.delivery,
      ...(isMobile && { fontSize: mobileStyles.delivery.fontSize })
    };
    
    const responsiveIconStyle = {
      ...cardStyles.icon,
      ...(isMobile && { fontSize: mobileStyles.icon.fontSize })
    };
    
    return (
      <div style={responsiveCardStyle}>
        <div style={responsiveIconStyle}>🎹</div>
        <h2 style={responsiveH2Style}>MIDIS</h2>
        <div style={responsivePriceStyle}>{midiService.price}</div>
        <div style={responsiveDescStyle}>{midiService.description}</div>
        <div style={responsiveDeliveryStyle}>Turnaround: {midiService.turnaround}</div>
        <button 
          style={{
            ...cardStyles.button,
            ...(hoveredButton === 'midis' ? cardStyles.buttonHover : {}),
            ...(isMobile && mobileStyles.button)
          }}
          onClick={() => handleBooking(midiService)}
          onMouseEnter={() => setHoveredButton('midis')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          BOOK
        </button>
      </div>
    );
  };

  // Organize the cards in two rows
  return (
    <div style={containerStyle}>
      {isMobile ? (
        // Stack cards vertically on mobile
        <>
          <StyledTracksCard />
          <StyledMasteringCard />
          <StyledLessonsCard />
          <StyledMidiCard />
        </>
      ) : (
        // Organize cards in two rows on desktop
        <>
          <div style={rowStyle}>
            <StyledTracksCard />
            <StyledMasteringCard />
          </div>
          <div style={rowStyle}>
            <StyledLessonsCard />
            <StyledMidiCard />
          </div>
        </>
      )}
      
      {showModal && (
        <IsolatedBookingModal 
          service={selectedService} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

export default IsolatedServiceList;