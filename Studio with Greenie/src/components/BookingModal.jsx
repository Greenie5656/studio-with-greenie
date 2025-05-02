import React, { useState } from 'react';
import SuccessMessage from './SuccessMessage';


function BookingModal({ service, onClose }) {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    return <SuccessMessage service={service} onClose={onClose} />;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <h2>Book {service.name}</h2>
        
        <div className="booking-details">
          <p className="booking-service">{service.name}</p>
          <p className="booking-price">
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
            <p className="booking-payment-terms">
              Pay half now (£75) to book your slot and half when you're happy with the track
            </p>
          )}
          
          <p className="booking-turnaround">
            Estimated turnaround: {service.turnaround}
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
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
            className={`book-now-button ${isProcessing ? 'processing' : ''}`}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Book Now ${service.deposit ? `- ${service.deposit}` : ''}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;