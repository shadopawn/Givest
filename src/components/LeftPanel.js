import React, {useState} from 'react';
import './LeftPanel.css';
import DonationForm from './DonationForm';
import PaypalButtons from './PaypalButtons';
import BackButton from './BackButton';
import AboutUs from './AboutUs';

export default function LeftPanel() {

    const [showPaypalButtons, setShowPaypalButtons] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false)
    
    const [formDataForPaypal, setformDataForPaypal] = useState();

    const formSubmited = (formData) => {
        console.log("Finish Donation button clicked");
        console.log(formData);
        setformDataForPaypal(formData);
        setShowAboutUs(false);
        setShowPaypalButtons(true);
    };

    const handleAboutUsClick = () => {
        setShowAboutUs(true);
        setShowPaypalButtons(false);
    }

    const backButtonClicked = () => {
        setShowAboutUs(false);
        setShowPaypalButtons(false);
    }

    return (
        <div className="LeftPanel">
            <h1>Welcome to Givest</h1>
            <h4 onClick={() => handleAboutUsClick()}>About us</h4>
            {!(showPaypalButtons || showAboutUs) && (<DonationForm submitForm={(data) => formSubmited(data)} />)}
            {(showPaypalButtons || showAboutUs) && (<BackButton backButtonClicked={() => backButtonClicked()}/>)}
            {showPaypalButtons && (<PaypalButtons formData={formDataForPaypal} />)}
            {showAboutUs && (<AboutUs donateButtonFunction={() => backButtonClicked()} />)}
        </div>
    )
}
