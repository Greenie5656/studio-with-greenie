import React from 'react';

function TracksCard({ onBook }) {
  const trackService = {
    name: 'Tracks',
    price: '£150',
    deposit: '£75',
    description: 'Get your very own tracks produced and mastered by DJ Greenie',
    turnaround: '2 weeks'
  };

  return (
    <div className="service-card tracks">
      <div className="icon">🎵</div>
      <h2>TRACKS</h2>
      <div className="price">{trackService.price}</div>
      <div className="description">{trackService.description}</div>
      <div className="delivery">Turnaround: {trackService.turnaround}</div>
      <button 
        className="book-button" 
        onClick={() => onBook(trackService)}
      >
        BOOK
      </button>
    </div>
  );
}

export default TracksCard;