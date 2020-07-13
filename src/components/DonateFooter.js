import React from 'react'

export default function DonateFooter({showDonationModal}) {
    
    const handleClick = (word) => {
        showDonationModal();
        console.log(word);
    }

    return (
        <div className="DonateFooter">
            <h4>Start competeing</h4>
            <button type="button" onClick={() => handleClick("donate button clicked")} >Donate now</button>
        </div>
    )
}
