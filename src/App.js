import React from 'react';
import './App.css';
import GivestTitle from './components/GivestTitle';
import Leaderboard from './components/Leaderboard';
import DonateDiv from './components/DonateDiv';

function App() {
  return (
    <div className="App">
      <GivestTitle />
      <Leaderboard />
      <DonateDiv />
    </div>
  );
}

export default App;
