import React from 'react'

export default function DonateDiv() {
    
    const handleClick = (word) => {
        console.log(word);
    }

    return (
        <div className="DonateDiv">
            <h4>Start competeing</h4>
            <button type="button" onClick={() => handleClick("donate button clicked")} >Donate now</button>
        </div>
    )
}
