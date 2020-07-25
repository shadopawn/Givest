import React, {useState} from 'react';
import './App.css';
import GivestTitle from './components/GivestTitle';
import Leaderboard from './components/Leaderboard';
import DonateFooter from './components/DonateFooter';
import DonationModal from './components/DonationModal';
import AboutUs from './components/AboutUs';

function App() {

	const [showModal, setShowModal] = useState(false);

	return (
		<div className="App">
			<GivestTitle />
			<AboutUs />
			<Leaderboard />
			<DonationModal closeModal={() => setShowModal(false)} show={showModal}/>
			<DonateFooter showDonationModal={() => setShowModal(true)}/>
		</div>
	);
}

export default App;
