import React from 'react';
import Navbar from './components/navigation/navbar';
import Header from './components/header/header';
import GameResults from './components/gameresults/gameresults';
import ReturnToTop from './components/returntotop/returntotop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <GameResults />
    </div>
);
}

export default App;
