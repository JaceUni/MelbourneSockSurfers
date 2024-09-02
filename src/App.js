import React from 'react';
import Navbar from './components/navigation/navbar';
import Header from './components/header/header';
import ReturnToTop from './components/returntotop/returntotop';
import GameResults from './components/gameresults/gameresults';
import UpcomingEvents from './components/upcomingevents/upcomingevents';
import Carousel from './components/carousel/carousel';
import TradingCards from './components/tradingcards/tradingcards';
import Videos from './components/videos/videos';
import Newsletter from './components/newsletter/newsletter';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ReturnToTop />
      <GameResults />
      <UpcomingEvents />
      <Carousel />
      <TradingCards />
      <Videos />
      <Newsletter />
      <Footer />
    </div>
);
}

export default App;
