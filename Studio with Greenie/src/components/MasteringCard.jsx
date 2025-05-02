import React from 'react';


function MasteringCard({ onBook }) {
  const masteringService = {
    name: 'Mastering',
    singleTrackPrice: '£25',
    stemPrice: '£75',
    price: 'From £25',
    deposit: '£25',
    description: 'Professional mastering services for your tracks',
    turnaround: '2 weeks'
  };

  return (
    <div className="service-card mastering">
      <div className="icon">🔊</div>
      <h2>MASTERING</h2>
      <div className="price">{masteringService.price}</div>
      <div className="description">
        Single Track: {masteringService.singleTrackPrice}<br />
        Stem Mastering: {masteringService.stemPrice}
      </div>
      <div className="delivery">Turnaround: {masteringService.turnaround}</div>
      <button 
        className="book-button"
        onClick={() => onBook(masteringService)}
      >
        BOOK
      </button>
    </div>
  );
}

export default MasteringCard;