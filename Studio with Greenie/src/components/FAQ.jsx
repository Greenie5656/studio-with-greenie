import React, { useState, useEffect } from 'react';
import ContentPage from './ContentPage';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
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
  
  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  
  // FAQ specific styles
  const getFAQStyles = (baseStyles) => {
    return {
      ...baseStyles,
      faqContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: isDesktop ? '1rem' : '0.8rem',
      },
      faqItem: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '2px solid rgba(0, 255, 0, 0.3)',
        borderRadius: '10px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      },
      faqItemOpen: {
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
        borderColor: 'rgba(0, 255, 0, 0.6)',
      },
      faqQuestion: {
        padding: isDesktop ? '1.5rem' : isTablet ? '1.2rem' : '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
      },
      faqQuestionText: {
        margin: 0,
        fontSize: isDesktop ? '1.2rem' : isTablet ? '1.1rem' : '1rem',
        color: 'white',
        fontWeight: 'bold',
      },
      faqToggle: {
        color: '#00FF00',
        fontSize: isDesktop ? '1.5rem' : isTablet ? '1.3rem' : '1.2rem',
        fontWeight: 'bold',
      },
      faqAnswer: {
        maxHeight: 0,
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, padding 0.3s ease',
        padding: '0 1.5rem',
      },
      faqAnswerShow: {
        maxHeight: '500px',
        padding: isDesktop ? '1.5rem' : isTablet ? '1.2rem' : '1rem',
      },
      faqAnswerText: {
        margin: 0,
        lineHeight: 1.6,
        fontSize: isDesktop ? '1.1rem' : isTablet ? '1rem' : '0.9rem',
      }
    };
  };
  
  const faqs = [
    {
      question: "What genres do you work with?",
      answer: "DJ Greenie Studio specializes in electronic music genres including Bouncy House, Techno, Trance, and Drum & Bass. However, we're versatile and can work with many other genres as well."
    },
    {
      question: "How long does it take to produce a track?",
      answer: "The standard turnaround time for track production is 2 weeks. This includes the initial concept, production, and up to 3 rounds of revisions. More complex projects may require additional time."
    },
    {
      question: "What do I need to prepare for mastering?",
      answer: "For mastering, please provide your final mix as a WAV or AIFF file with at least -6dB of headroom. Include any reference tracks and specific instructions about the sound you're aiming for."
    },
    {
      question: "Do you offer stem mastering?",
      answer: "Yes, we offer stem mastering services, which allow for more detailed control over different elements of your track. Please provide clearly labeled stems as WAV or AIFF files, with a maximum of 8 stems per project."
    },
    {
      question: "What's included in a DJ lesson?",
      answer: "DJ lessons cover beatmatching, mixing techniques, EQ and effects use, track selection, and performance skills. Lessons are customized based on your current skill level and goals."
    },
    {
      question: "What production software do you teach?",
      answer: "Production lessons are available exclusively for Cubase and are suitable for all levels. Lessons cover sound design, arrangement, mixing, and workflow techniques, tailored to your experience and goals. Instruction is led by DJ Greenie, a BA (Hons) Music Production graduate."
    },
    {
      question: "Can I request specific MIDI recreations?",
      answer: "Absolutely! Our Bespoke MIDI service is designed to recreate specific melodies, basslines, or chord progressions from reference tracks. We'll deliver them as MIDI files compatible with all major DAWs."
    },
    {
      question: "How are payments handled?",
      answer: "All payments are processed securely through Stripe. For track production, we require a 50% deposit upfront and the remaining 50% upon completion. All other services require full payment at booking."
    },
    {
      question: "What if I'm not satisfied with the result?",
      answer: "Your satisfaction is our priority. We offer revision rounds for all our services. If you're still not satisfied after all included revisions, we can discuss additional options to ensure you're happy with the final product."
    },
    {
      question: "How do I receive my files?",
      answer: "All files are delivered digitally through secure download links sent to your email. Files are available in multiple formats (WAV, MP3, etc.) to suit your needs."
    }
  ];

  return (
    <ContentPage title="Frequently Asked Questions">
      {(baseStyles) => {
        const styles = getFAQStyles(baseStyles);
        
        return (
          <div style={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.faqItem,
                  ...(openIndex === index ? styles.faqItemOpen : {})
                }}
              >
                <div 
                  style={styles.faqQuestion}
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 style={styles.faqQuestionText}>{faq.question}</h3>
                  <span style={styles.faqToggle}>{openIndex === index ? '−' : '+'}</span>
                </div>
                <div style={{
                  ...styles.faqAnswer,
                  ...(openIndex === index ? styles.faqAnswerShow : {})
                }}>
                  <p style={styles.faqAnswerText}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        );
      }}
    </ContentPage>
  );
}

export default FAQ;