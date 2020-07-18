import React, { useState } from 'react'
import PropTypes from 'prop-types'

function DonationForm({submitForm}) {
    
    let formData = {
        donationAmmount : 5,
        name: "Anonymous",
        charity: "The Developers",
        customLink: ""
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(isInputValid() === false){
            return;
        }

        submitForm(formData);
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

    function isInputValid(){
        if(isNaN(formData.donationAmmount) || formData.donationAmmount < 1){
            alert("Please put a positive number in Donation Ammount");
            return false;
        }

        if (validURL(formData.customLink) === false){
            alert("Please input a valid link");
            return false;
        }

        return true;
    }

    function validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }
    
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input name="Donation Ammount" type="text" placeholder="Donation Ammount" onChange={(event) => handleChange(event)}/><br/>
            <input name="Name" type="text" placeholder="Name" onChange={(event) => handleChange(event)}/><br/>
            <select name="Charity Selection" onChange={(event) => handleChange(event)}>
                <option value="Select Charity" disabled selected hidden>Select Charity</option>
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
    submitForm: PropTypes.func.isRequired
}

export default DonationForm