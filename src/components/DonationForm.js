import React, { useState } from 'react'
import PropTypes from 'prop-types'

function DonationForm({formSubmit}) {
    
    let formData = {
        donationAmmount : 1,
        name: "",
        charity: "",
        customLink: ""
    };

    const handleSubmit = (event) => {
        formSubmit(formData);
        event.preventDefault();
    };

    const handleChange = (event) => {
        const target = event.target;
        const fromName = target.name;
        switch(fromName) {
            case "Donation Ammount":
                formData.donationAmmount = target.value;
                break;
            case "Name":
                formData.name = target.value;
                break;
            case "Charity Selection":
                formData.charity = target.value;
                break;
            case "Custom Link":
                formData.customLink = target.value;
                break;
            default:
          }
    };
    
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input name="Donation Ammount" type="text" placeholder="Donation Ammount" onChange={(event) => handleChange(event)}/><br/>
            <input name="Name" type="text" placeholder="Name" onChange={(event) => handleChange(event)}/><br/>
            <select name="Charity Selection" onChange={(event) => handleChange(event)}>
                <option value="Select Charity">Select Charity</option>
                <option value="The Developers">The Developers</option>
                <option value="Doctors Without Borders">Doctors Without Borders</option>
                <option value="ASPCA">ASPCA</option>
                <option value="Red Cross">Red Cross</option>
                <option value="Wounded Warrior">Wounded Warrior</option>
            </select><br/>
            <input name="Custom Link" type="text" placeholder="Custom Link" onChange={(event) => handleChange(event)}/><br/>
            <input type="submit" value="Finish Donation" />
        </form>
    )
}

DonationForm.propTypes = {
    formSubmit: PropTypes.func.isRequired
}

export default DonationForm