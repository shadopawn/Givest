import React from 'react';
import './App.css';
import GivestTitle from './components/GivestTitle';
import Leaderboard from './components/Leaderboard';
import DonateFooter from './components/DonateFooter';

function App() {
	return (
		<div className="App">
			<GivestTitle />
			<Leaderboard />
			<DonateFooter />
		</div>
	);
}

export default App;
