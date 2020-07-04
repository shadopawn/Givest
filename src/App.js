import React from 'react';
import './App.css';
import GivestTitle from './component/GivestTitle';
import Leaderboard from './component/Leaderboard';
import DonateDiv from './component/DonateDiv';

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
