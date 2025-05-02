import React from 'react';

function BespokeMidiCard({ onBook }) {
  const midiService = {
    name: 'Bespoke MIDI',
    price: '£30',
    deposit: '£30',
    description: 'Get any riff recreated and delivered as a MIDI file',
    turnaround: '2 weeks'
  };

  return (
    <div className="service-card midis">
      <div className="icon">🎹</div>
      <h2>MIDIS</h2>
      <div className="price">{midiService.price}</div>
      <div className="description">{midiService.description}</div>
      <div className="delivery">Turnaround: {midiService.turnaround}</div>
      <button 
        className="book-button"
        onClick={() => onBook(midiService)}
      >
        BOOK
      </button>
    </div>
  );
}

export default BespokeMidiCard;