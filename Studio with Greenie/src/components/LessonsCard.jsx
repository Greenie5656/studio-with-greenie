import React from 'react';

function LessonsCard({ onBook }) {
  const lessonsService = {
    name: 'Lessons',
    djPrice: '£25',
    productionPrice: '£20',
    price: 'From £20',
    deposit: '£20',
    description: 'One-on-one lessons with DJ Greenie',
    turnaround: '30 mins per session'
  };

  return (
    <div className="service-card lessons">
      <div className="icon">🎧</div>
      <h2>LESSONS</h2>
      <div className="price">{lessonsService.price}</div>
      <div className="description">
        DJ Lessons: {lessonsService.djPrice} / 30mins<br />
        Production Lessons: {lessonsService.productionPrice} / 30mins
      </div>
      <div className="delivery">Book your session today</div>
      <button 
        className="book-button"
        onClick={() => onBook(lessonsService)}
      >
        ENQUIRE
      </button>
    </div>
  );
}

export default LessonsCard;