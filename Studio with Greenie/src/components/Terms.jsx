import React, { useState, useEffect } from 'react';
import ContentPage from './ContentPage';

function Terms() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Track window width for responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ContentPage title="Terms & Conditions">
      {(styles) => (
        <>
          <div style={styles.contentSection}>
            <h2 style={styles.h2}>Booking & Payment</h2>
            <p style={styles.p}>
              For track production services, a 50% deposit is required to secure your booking.
              The remaining 50% is due upon completion and your satisfaction with the final product.
              For all other services, full payment is required at the time of booking.
            </p>
            <p style={styles.p}>
              All payments are processed securely through Stripe. Refunds are available
              within 14 days of purchase if no work has commenced.
            </p>
          </div>
          
          <div style={styles.contentSection}>
            <h2 style={styles.h2}>Rights & Ownership</h2>
            <p style={styles.p}>
              Upon full payment, you receive full ownership of the delivered tracks/MIDI files.
              DJ Greenie Studio retains the right to use portions of the work for promotional
              purposes unless otherwise agreed in writing.
            </p>
          </div>
          
          <div style={styles.contentSection}>
            <h2 style={styles.h2}>Revisions & Feedback</h2>
            <p style={styles.p}>
              Track production includes up to 3 rounds of revisions.
              Additional revisions may incur extra charges at our standard rates.
              Mastering services include 1 revision.
            </p>
          </div>
          
          <div style={styles.contentSection}>
            <h2 style={styles.h2}>Cancellation Policy</h2>
            <p style={styles.p}>
              Lesson cancellations require 24 hours' notice for a full refund.
              Cancellations with less notice will be charged at 50% of the booking fee.
              For track production, cancellation after work has begun will result in
              forfeiture of the deposit.
            </p>
          </div>
        </>
      )}
    </ContentPage>
  );
}

export default Terms;