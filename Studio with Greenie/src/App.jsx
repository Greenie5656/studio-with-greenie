import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, useLayoutEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import IsolatedServiceList from './components/IsolatedServiceList';
import PaymentSuccess from './components/PaymentSuccess';
import Terms from './components/Terms';
import Process from './components/Process';
import FAQ from './components/FAQ';
import './App.css';

// Scroll restoration component with pathname detection
function ScrollToTop() {
  const { pathname } = useLocation();
  
  // Using useLayoutEffect for more immediate action before paint
  useLayoutEffect(() => {
    // Add pathname to console log to see when this fires
    console.log(`ScrollToTop triggered for path: ${pathname}`);
    
    // Function to handle scrolling
    const handleScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Execute scroll immediately
    handleScroll();
    
    // Also after a delay to catch any layout shifts
    const timeoutId = setTimeout(handleScroll, 50);
    return () => clearTimeout(timeoutId);
  }, [pathname]); // This effect runs whenever pathname changes
  
  return null; // This component doesn't render anything
}

// Add overflow control for body to prevent scrolling past footer
function BodyScrollControl() {
  // Control overflow behavior globally
  useEffect(() => {
    // Set overflow-x to hidden to prevent horizontal scrolling
    document.documentElement.style.overflowX = 'hidden';
    
    // Add overscroll-behavior to control bounce effects
    document.documentElement.style.overscrollBehavior = 'none';
    
    // Clean up function
    return () => {
      document.documentElement.style.overflowX = '';
      document.documentElement.style.overscrollBehavior = '';
    };
  }, []);
  
  return null;
}

// App layout styles
const appStyles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden', // Prevent horizontal scrolling
    overscrollBehavior: 'none' // Prevent bounce effects
  },
  mainContent: {
    flex: '1 0 auto',
    paddingBottom: '200px', // Extra space to prevent footer overlap
  },
  footerWrapper: {
    width: '100%',
    position: 'relative',
    marginTop: 'auto',
  }
};

function App() {
  return (
    <BrowserRouter>
      <div style={appStyles.appContainer}>
        <ScrollToTop />
        <BodyScrollControl />
        <AnimatedBackground />
        <Header />
        <main style={appStyles.mainContent}>
          <Routes>
            <Route path="/" element={<IsolatedServiceList />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/process" element={<Process />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <div style={appStyles.footerWrapper}>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;