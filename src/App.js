import React from 'react';
import './App.css';
import GivestTitle from './component/GivestTitle';
import Leaderboard from './component/Leaderboard';
import DonateButton from './component/DonateButton';

function App() {
  return (
    <div className="App">
      <GivestTitle />
      <Leaderboard />
      <DonateButton />
    </div>
  );
}

export default App;
