import React/*, { useState }*/ from 'react'
import PropTypes from 'prop-types'
import { charityList } from '../charityInfo';
import SelectOption from './SelectOption';

function DonationForm({submitForm}) {

    let formData = {
        donationAmount: 5,
        name: "Anonymous",
        charity: "The Developers",
        customLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(isInputValid() === false){
            return;
        }

        if(submitForm){
            submitForm(formData);
        }
        else{
            console.error("Null submitForm function for DonationForm");
        }
    };

    //const [selectValue, setSelectValue] = useState("Select Charity");

    const handleChange = (event) => {
        const target = event.target;
        const fromName = target.name;
        if (fromName === "donationAmount"){
            formData[fromName] = parseFloat(target.value);
        }
        else{
            formData[fromName] = target.value;
        }
    };

    function isInputValid(){
        if(isNaN(formData.donationAmount) || formData.donationAmount <= 0){
            alert("Please put a positive number in Donation Amount");
            return false;
        }

        let characterlimit = 25
        if(formData.name.length > characterlimit){
            alert("Please limit name to less than "+characterlimit+" characters")
            return false;
        }

        if (validURL(formData.customLink) === false){
            alert("Please input a valid link");
            return false;
        }

        if (formData.customLink.indexOf("http://") === -1 && formData.customLink.indexOf("https://") === -1) {
            alert("Please add https:// to your link");
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
        <form onSubmit={(event) => handleSubmit(event)} className="formContainer">
            <input name="donationAmount" type="text" placeholder="Donation Amount" onChange={(event) => handleChange(event)}/>
            <input name="name" type="text" placeholder="Name" onChange={(event) => handleChange(event)}/>
            <select name="charity" onChange={(event) => handleChange(event)}>
                <option value="Select Charity" disabled selected hidden>Select Charity</option>
                {charityList.map((item, index) => (
                    <SelectOption key={index} charity={item} />
                ))}
            </select>
            <input name="customLink" type="text" placeholder="Custom Link" onChange={(event) => handleChange(event)}/>
            <input type="submit" value="DONATE NOW" />
        </form>
    )
}

DonationForm.propTypes = {
    submitForm: PropTypes.func.isRequired
}

export default DonationForm