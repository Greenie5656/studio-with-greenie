import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IsolatedSuccessMessage from './IsolatedSuccessMessage'; // Adjust path as needed

function PaymentSuccess() {
  const [service, setService] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get parameters from URL
    const params = new URLSearchParams(location.search);
    const serviceName = params.get('service');
    
    // Create service object based on service name
    if (serviceName === 'Tracks') {
      setService({
        name: 'Tracks',
        price: '£150',
        deposit: '£75',
        description: 'Get your very own tracks produced and mastered by DJ Greenie',
        turnaround: '2 weeks'
      });
    } else if (serviceName === 'Mastering') {
      setService({
        name: 'Mastering',
        singleTrackPrice: '£25',
        stemPrice: '£75',
        price: 'From £25',
        description: 'Professional mastering services for your tracks',
        turnaround: '2 weeks'
      });
    } else if (serviceName === 'Lessons') {
      setService({
        name: 'Lessons',
        djPrice: '£25',
        productionPrice: '£25',
        price: '£25',
        description: 'One-on-one lessons with DJ Greenie',
        turnaround: '30 mins per session'
      });
    } else if (serviceName === 'Bespoke MIDI') {
      setService({
        name: 'Bespoke MIDI',
        price: '£30',
        deposit: '£30',
        description: 'Get any riff recreated and delivered as a MIDI file',
        turnaround: '2 weeks'
      });
    } else {
      // Handle unknown service
      console.error('Unknown service:', serviceName);
    }
  }, [location]);
  
  // Handle closing the success message
  const handleClose = () => {
    navigate('/'); // Redirect to home page
  };
  
  // If service is not yet loaded, show loading
  if (!service) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: 'black',
        color: '#00FF00'
      }}>
        <p>Loading...</p>
      </div>
    );
  }
  
  // Render success message when service is loaded
  return <IsolatedSuccessMessage service={service} onClose={handleClose} />;
}

export default PaymentSuccess;