import React from 'react'
import PropTypes from 'prop-types'

function DonationForm({formSubmit}) {
    
    const handleSubmit = (event) => {
        formSubmit();
        event.preventDefault();
    };
    
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" placeholder="Donation Ammount"/><br/>
            <input type="text" placeholder="Name"/><br/>
            <select>
                <option value="Select Charity">Select Charity</option>
                <option value="The Developers">The Developers</option>
                <option value="Doctors Without Borders">Doctors Without Borders</option>
                <option value="ASPCA">ASPCA</option>
                <option value="Red Cross">Red Cross</option>
                <option value="Wounded Warrior">Wounded Warrior</option>
            </select><br/>
            <input type="text" placeholder="Custom Link"/><br/>
            <input type="submit" value="Finish Donation" />
        </form>
    )
}

DonationForm.propTypes = {
    formSubmit: PropTypes.func.isRequired
}

export default DonationForm