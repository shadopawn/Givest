import React, {useState} from 'react';
import './LeftPanel.css';
import DonationForm from './DonationForm';
import PaypalButtons from './PaypalButtons';

export default function LeftPanel() {

    const [showForm, setShowForm] = useState(true);
    
    const [formDataForPaypal, setformDataForPaypal] = useState();

    const formSubmited = (formData) => {
        console.log("Finish Donation button clicked");
        console.log(formData);
        setformDataForPaypal(formData);
        setShowForm(false);
    };

    return (
        <div className="LeftPanel">
            <h1>Welcome to Givest</h1>
            <h4>About us</h4>
            {showForm && (<DonationForm submitForm={(data) => formSubmited(data)} />)}
            {!showForm && (<PaypalButtons formData={formDataForPaypal} />)}
        </div>
    )
}
