import React, { useState, useEffect } from 'react';
import ContentPage from './ContentPage';

function Process() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Track window width for responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determine device size
  const isDesktop = windowWidth > 992;
  const isTablet = windowWidth <= 992 && windowWidth > 480;
  const isMobile = windowWidth <= 480;
  
  // Process specific styles
  const getProcessStyles = (baseStyles) => {
    return {
      ...baseStyles,
      processSteps: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: '100%',
        width: '100%'
      },
      processStep: {
        display: 'flex',
        marginBottom: '2rem',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'center' : 'flex-start',
        gap: '1.5rem',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 255, 0, 0.05)'
      },
      stepNumber: {
        backgroundColor: '#00FF00',
        color: 'black',
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        flexShrink: 0,
        boxShadow: '0 0 10px rgba(0, 255, 0, 0.7)',
        border: '2px solid rgba(0, 0, 0, 0.1)'
      },
      stepContent: {
        flex: 1,
        minWidth: 0
      },
      stepH3: {
        color: '#00FF00',
        margin: '0 0 0.75rem 0',
        fontSize: '1.5rem',
        lineHeight: '1.2',
        fontWeight: '600'
      }
    };
  };

  return (
    <ContentPage title="Studio Process">
      {(baseStyles) => {
        const styles = getProcessStyles(baseStyles);
        
        return (
          <>
            <div style={styles.contentSection}>
              <h2 style={styles.h2}>Track Production</h2>
              <ol style={styles.processSteps}>
                <li style={styles.processStep}>
                  <span style={styles.stepNumber}>1</span>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepH3}>Initial Consultation</h3>
                    <p style={styles.p}>After booking, we'll schedule a call to discuss your vision, influences, and goals for the track.</p>
                  </div>
                </li>
                <li style={styles.processStep}>
                  <span style={styles.stepNumber}>2</span>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepH3}>Concept & Arrangement</h3>
                    <p style={styles.p}>We'll develop the initial concept, including key musical elements, structure, and arrangement.</p>
                  </div>
                </li>
                <li style={styles.processStep}>
                  <span style={styles.stepNumber}>3</span>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepH3}>First Draft</h3>
                    <p style={styles.p}>Within 7 days, you'll receive the first draft of your track for review.</p>
                  </div>
                </li>
                <li style={styles.processStep}>
                  <span style={styles.stepNumber}>4</span>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepH3}>Feedback & Revisions</h3>
                    <p style={styles.p}>You'll provide feedback, and we'll make up to 3 rounds of revisions.</p>
                  </div>
                </li>
                <li style={styles.processStep}>
                  <span style={styles.stepNumber}>5</span>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepH3}>Final Mix & Master</h3>
                    <p style={styles.p}>Once you're happy with the track, we'll create the final mix and master.</p>
                  </div>
                </li>
                <li style={styles.processStep}>
                  <span style={styles.stepNumber}>6</span>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepH3}>Delivery</h3>
                    <p style={styles.p}>You'll receive the final track in high-quality formats, ready for release or distribution.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div style={styles.contentSection}>
              <h2 style={styles.h2}>Mastering Process</h2>
              <ol style={styles.processSteps}>
                <li style={styles.processStep}>
                  <span style={styles.stepNumber}>1</span>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepH3}>File Submission</h3>
                    <p style={styles.p}>Upload your mix files after booking confirmation.</p>
                  </div>
                </li>
                <li style={styles.processStep}>
                  <span style={styles.stepNumber}>2</span>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepH3}>Initial Master</h3>
                    <p style={styles.p}>We'll create an initial master within 3-5 business days.</p>
                  </div>
                </li>
                <li style={styles.processStep}>
                  <span style={styles.stepNumber}>3</span>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepH3}>Review & Revision</h3>
                    <p style={styles.p}>You'll receive the first master for review, with one round of revisions included.</p>
                  </div>
                </li>
                <li style={styles.processStep}>
                  <span style={styles.stepNumber}>4</span>
                  <div style={styles.stepContent}>
                    <h3 style={styles.stepH3}>Final Delivery</h3>
                    <p style={styles.p}>The final mastered file will be delivered in multiple formats (WAV, MP3).</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div style={styles.contentSection}>
              <h2 style={styles.h2}>Lessons</h2>
              <p style={styles.p}>
                DJ and Production lessons are conducted via Zoom and scheduled at a time
                that works for both parties. Lesson materials and recordings are provided
                after each session for your continued practice.
              </p>
            </div>
          </>
        );
      }}
    </ContentPage>
  );
}

export default Process;