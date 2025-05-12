import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const cardStyles = {
  base: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 1rem 1.5rem',
    borderRadius: '15px',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'black',
    border: '3px solid #00FF00',
    width: '350px',
    minHeight: 'auto',
    margin: '1rem'
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
    padding: '1rem 2rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    backgroundColor: '#00FF00',
    color: 'black',
    fontFamily: 'Akira Expanded, sans-serif',
    letterSpacing: '1px',
    marginTop: '1.5rem',
    transition: 'all 0.2s',
    boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)',
  },
  buttonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 0 25px rgba(0, 255, 0, 0.8)',
  },
  h2: {
    fontSize: '1.8rem',
    margin: '0.5rem 0',
    fontFamily: 'Akira Expanded, sans-serif',
    letterSpacing: '2px',
    color: '#00FF00',
  },
  price: {
    fontSize: '2rem',
    lineHeight: '1.2',
    fontWeight: 'bold',
    margin: '0.5rem 0',
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    margin: '1rem 0',
    maxWidth: '90%',
  },
  delivery: {
    fontSize: '1rem',
    margin: '1rem 0',
    opacity: 0.8,
  },
  icon: {
    fontSize: '2.5rem',
    margin: '1rem 0',
  }
};


// Card styles with very large 1300px fixed dimensions


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
      width: '100%',
      maxWidth: '500px',
      height: 'auto', 
      minHeight: '400px',
      padding: '20px',
      margin: '0 auto',
      h2: { fontSize: '24px' },
      price: { fontSize: '20px' },
      description: { fontSize: '16px', lineHeight: '1.5' },
      delivery: { fontSize: '14px' },
      icon: { fontSize: '24px' },
      button: { fontSize: '16px', padding: '12px 24px' }
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
    padding: '1rem',
  },
  modalContent: {
    backgroundColor: 'black',
    border: '2px solid #00FF00',
    borderRadius: '15px',
    padding: '2rem',
    position: 'relative',
    width: '90%',
    maxWidth: '400px',
    color: 'white',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: '#00FF00',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  h2: {
    fontSize: '1.8rem',
    textAlign: 'center',
    color: '#00FF00',
    marginBottom: '1.5rem',
    fontFamily: 'Akira Expanded, sans-serif',
    letterSpacing: '1px',
  },
  bookingDetails: {
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  bookingService: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  bookingPrice: {
    fontSize: '1.1rem',
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
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '1rem',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    border: '2px solid #00FF00',
    borderRadius: '5px',
    color: 'white',
    fontSize: '1rem',
  },
  bookNowButton: {
    width: '100%',
    padding: '1rem',
    backgroundColor: '#00FF00',
    color: 'black',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)',
    fontFamily: 'Akira Expanded, sans-serif',
    letterSpacing: '1px',
  },
  processingButton: {
    opacity: 0.7,
  }
};

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
    border: '2px solid #00FF00',
    borderRadius: '15px',
    padding: '2rem',
    position: 'relative',
    width: '90%',
    maxWidth: '400px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.5)',
  },
  successIcon: {
    fontSize: '2rem',
    color: '#00FF00',
    marginBottom: '1rem',
    display: 'inline-block',
    border: '2px solid #00FF00',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    lineHeight: '46px',
  },
  h2: {
    fontSize: '1.8rem',
    textAlign: 'center',
    color: '#00FF00',
    marginBottom: '1rem',
    fontFamily: 'Akira Expanded, sans-serif',
    letterSpacing: '1px',
  },
  successService: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  successMessage: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  paymentInfo: {
    fontSize: '1rem',
    marginBottom: '1rem',
    opacity: 0.8,
  },
  countdownContainer: {
    marginTop: '1.5rem',
  },
  countdownBar: {
    height: '8px',
    backgroundColor: 'rgba(0, 255, 0, 0.2)',
    borderRadius: '4px',
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
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s',
    boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)',
    fontFamily: 'Akira Expanded, sans-serif',
    letterSpacing: '1px',
  }
};

// Isolated BookingModal component
function IsolatedBookingModal({ service, onClose }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [formState, handleSubmit] = useForm("xvgaaddo"); // Replace with your actual form ID
  
  // Track window width for responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // If form submission succeeded, redirect to Stripe
  useEffect(() => {
    if (formState.succeeded) {
      window.location.href = service.paymentLink;
    }
  }, [formState.succeeded, service.paymentLink]);
  
  // Determine if mobile view
  const isMobile = windowWidth <= 768;
  
  // Responsive styles for modal
  const responsiveModalStyle = {
    ...modalStyles.modalContent,
    width: isMobile ? '90%' : '500px',
    minWidth: isMobile ? 'auto' : '500px',
    maxWidth: isMobile ? '400px' : '600px',
    padding: isMobile ? '1.5rem' : '2.5rem',
    transform: isMobile ? 'scale(1)' : 'scale(1)',
    transformOrigin: 'center center',
  };
  
  const responsiveH2Style = {
    ...modalStyles.h2,
    fontSize: isMobile ? '1.8rem' : '2.5rem',
  };

  // Show loading state while redirecting to Stripe
  if (formState.succeeded) {
    return (
      <div style={modalStyles.modalOverlay}>
        <div style={responsiveModalStyle}>
          <h2 style={responsiveH2Style}>Redirecting to payment...</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              border: '5px solid rgba(0, 255, 0, 0.3)',
              borderRadius: '50%',
              borderTop: '5px solid #00FF00',
              animation: 'spin 1s linear infinite',
            }}></div>
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
          </div>
          <p style={{
            textAlign: 'center',
            fontSize: '1rem',
            opacity: 0.8,
          }}>
            Please wait while we connect to our secure payment provider
          </p>
        </div>
      </div>
    );
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
          
          {/* Test mode indicator */}
          <p style={{
            backgroundColor: '#FFF5CC',
            color: '#333',
            padding: '0.5rem',
            borderRadius: '5px',
            fontSize: isMobile ? '0.7rem' : '0.9rem',
            marginTop: '1rem',
            marginBottom: '1rem'
          }}>
            ⚠️ TEST MODE: No real payments will be processed
          </p>
        </div>
        
        {/* Formspree form */}
        <form onSubmit={handleSubmit}>
          <div style={modalStyles.formGroup}>
            <label style={modalStyles.label} htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              style={modalStyles.input}
              required
              placeholder="your@email.com"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={formState.errors}
              style={{
                color: '#FF4444',
                fontSize: '0.8rem',
                marginTop: '0.5rem'
              }}
            />
            
            {/* Hidden fields to pass service information */}
            <input type="hidden" name="service" value={service.name} />
            <input type="hidden" name="price" value={service.price} />
            {service.deposit && <input type="hidden" name="deposit" value={service.deposit} />}
          </div>
          
          <button 
            type="submit"
            disabled={formState.submitting}
            style={{
              ...modalStyles.bookNowButton,
              ...(formState.submitting ? modalStyles.processingButton : {})
            }}
          >
            {formState.submitting ? 'Processing...' : `Continue to Payment - ${service.deposit ? service.deposit : service.price}`}
          </button>
        </form>
        
        <p style={{
          fontSize: isMobile ? '0.9rem' : '1rem',
          margin: '1rem 0',
          opacity: 0.8,
          textAlign: 'center'
        }}>
          You'll be redirected to our secure payment page after submitting
        </p>
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
        const width = window.innerWidth;
        // Get actual header height plus some padding
        const height = header.offsetHeight + 20;
        setHeaderHeight(width > 768 ? height : height - 60);
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
    gap: isMobile ? '2rem' : '2rem', // Smaller gap on mobile
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
    marginBottom: '1rem'
  };
  
  // Wrapper components with isolated styling
  const StyledTracksCard = () => {
    const trackService = {
      name: 'Tracks',
      price: '£150',
      deposit: '£75',
      description: 'Get your very own tracks produced and mastered by DJ Greenie',
      turnaround: '2 weeks',
      paymentLink: 'https://buy.stripe.com/test_dR616sbmQeFTaGc5kn'

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
      turnaround: '2 weeks',
      paymentLink: 'https://buy.stripe.com/test_9AQg1mgHa7draGc4gi'
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
      productionPrice: '£25',
      price: '£25',
      deposit: '£25',
      description: 'One-on-one lessons with DJ Greenie',
      turnaround: '30 mins per session',
      paymentLink: 'https://buy.stripe.com/test_6oE5mI2Qk1T74hO8wx'
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
          BOOK
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
      turnaround: '2 weeks',
      paymentLink: 'https://buy.stripe.com/test_14k4iEgHaeFT01y6oo'

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