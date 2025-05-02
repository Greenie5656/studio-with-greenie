import React, { useEffect } from 'react';


function SuccessMessage({ service, onClose }) {
  // Auto close after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="success-content">
        <div className="success-icon">✓</div>
        <h2>Booking Confirmed!</h2>
        <p className="success-service">
          Your {service.name} booking has been received
        </p>
        <p className="success-message">
          Thanks for booking with DJ Greenie Studio. We'll be in touch via email shortly with next steps.
        </p>
        {service.name === 'Tracks' && (
          <p className="payment-info">
            Initial deposit of {service.deposit} has been received.
            The remaining balance will be due upon completion.
          </p>
        )}
        <div className="countdown-container">
          <p>This window will close automatically</p>
          <div className="countdown-bar">
            <div className="countdown-progress"></div>
          </div>
        </div>
        <button className="close-success-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessMessage;