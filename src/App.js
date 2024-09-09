// import all the components to be used for this page (referencing the .js file in each subfolder)
import React from 'react';
import Navbar from './components/navigation/navbar';
import Header from './components/header/header';
import ReturnToTop from './components/returntotop/returntotop';
import GameResults from './components/gameresults/gameresults';
import UpcomingEvents from './components/upcomingevents/upcomingevents';
import Weather from './components/weather/weather';
import Carousel from './components/carousel/carousel';
import TradingCards from './components/tradingcards/tradingcards';
import Videos from './components/videos/videos';
import Newsletter from './components/newsletter/newsletter';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      {/* Add each component to add to the page in order of its presence */}
      <Header />            {/* Header section with logo image */}
      <Navbar />            {/* Navigation bar with search function */}
      <ReturnToTop />       {/* Button in bottom-right corner of page that returns user to top of page when clicked */}
      <GameResults />       {/* Data table showing results of most recent games */}
      <UpcomingEvents />    {/* Details of the next game, including google map widget */}
      <Weather />           {/* Weather API showing current weather at next game's location */}
      <Carousel />          {/* Photo carousel showing four auto-scrolling images */}
      <TradingCards />      {/* Full-width image to break up the page */}
      <Videos />            {/* Latest videos for sock surfing */}
      <Newsletter />        {/* Provides option for user to subscribe to newsletter */}
      <Footer />            {/* Copyright details, as well as terms, privacy, careers, and contact dialogs */}
    </div>
);
}

export default App;
