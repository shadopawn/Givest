import React, {useState} from 'react'
import PropTypes from 'prop-types'
import DonationForm from './DonationForm';
import PaypalButtons from './PaypalButtons';

function DonationModal({show, closeModal}) {
    
    const [showForm, setShowForm] = useState(true);
    
    const [paypalDonationAmmount, setpaypalDonationAmmount] = useState();

    const formSubmit = (formData) => {
        console.log("Finish Donation button clicked");
        console.log(formData);
        setpaypalDonationAmmount(formData.donationAmmount);
        setShowForm(false);
    };

    const closeIconclicked = () => {
        closeModal();
        setShowForm(true);
    }
    
    if (show === false){
        return null;
    }
    
    return (
        <div className="DonationModal" data-testid="DonationModal">
            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => closeIconclicked()}>
                <path d="M17.5 0C7.8344 0.001408 0.0014 7.87917 0 17.6004C0.0014 27.3212 7.8344 35.1989 17.5 35.2C27.1659 35.1989 34.9986 27.3212 35 17.6004C34.9986 7.87917 27.1659 0.001408 17.5 0ZM26.8139 26.9674C24.4237 29.3681 21.1442 30.8461 17.5 30.8472C13.8561 30.8461 10.5766 29.3681 8.1865 26.9678C5.7995 24.5636 4.32915 21.2654 4.3288 17.6007C4.32915 13.9353 5.79915 10.6374 8.1865 8.23328C10.5766 5.83264 13.8561 4.35389 17.5 4.35318C21.1442 4.35424 24.4237 5.83264 26.8139 8.23328C29.2008 10.6374 30.6709 13.9353 30.6716 17.6004C30.6709 21.265 29.2012 24.5633 26.8139 26.9674ZM24.2532 10.8082C23.3555 9.90528 21.8995 9.90528 21.0018 10.8082L17.5 14.3299L13.9982 10.8082C13.1005 9.90528 11.6445 9.90528 10.7467 10.8082C9.84865 11.711 9.84865 13.1757 10.7467 14.0782L14.2481 17.6004L10.7467 21.1218C9.84865 22.025 9.84865 23.4893 10.7467 24.3922C11.1954 24.8435 11.7841 25.0698 12.3725 25.0698C12.9612 25.0698 13.5492 24.8435 13.9986 24.3922L17.5 20.8704L21.0018 24.3922C21.4505 24.8435 22.0392 25.0698 22.6278 25.0698C23.2162 25.0698 23.8045 24.8435 24.2536 24.3922C25.1517 23.4893 25.1517 22.025 24.2536 21.1218L20.7515 17.6004L24.2532 14.0782C25.1513 13.1757 25.1513 11.7114 24.2532 10.8082Z" fill="#666666"/>
            </svg>
            {showForm && (<DonationForm formSubmit={(data) => formSubmit(data)} />)}
            {!showForm && (<PaypalButtons donationAmmount={paypalDonationAmmount} />)}
            
        </div>
    )
}

DonationModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

export default DonationModal