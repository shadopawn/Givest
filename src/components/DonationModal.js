import React from 'react'
import PropTypes from 'prop-types'

function DonationModal({show, closeModal}) {
    
    if (show === false){
        return null;
    }

    const handleClick = () => {
        closeModal();
        console.log("close button clicked")
    };
    
    return (
        <div>
            <p>Hello Modal</p>
            <button onClick={() => handleClick()}> close </button>
        </div>
    )
}

DonationModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

export default DonationModal