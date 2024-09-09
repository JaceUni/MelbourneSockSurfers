import React from 'react';
import tradingCards from '../../assets/images/TradingCards.jpg';
import './tradingcards.css';

function TradingCards() {
  return (
    <section className="sectionFull">
      <div className="tradingCards" style={{ backgroundImage: `url(${tradingCards})` }}>
        <div className="tradingCardsText">Trading Cards coming soon</div>
      </div>
    </section>
  );
}

export default TradingCards;
