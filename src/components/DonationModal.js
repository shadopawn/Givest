import React from 'react'
import PropTypes from 'prop-types'

function DonationModal({show, closeModal}) {
    
    const handleClick = () => {
        closeModal();
        console.log("Finish Donation button clicked")
    };
    
    if (show === false){
        return null;
    }

    return (
        <div>
            <form onSubmit={() => handleClick()}>
                <input type="text"/><br/>
                <input type="text"/><br/>
                <select>
                    <option value="Doctors Without Borders">Doctors Without Borders</option>
                    <option value="ASPCA">ASPCA</option>
                    <option value="Red Cross">Red Cross</option>
                    <option value="Wounded Warrior">Wounded Warrior</option>
                    <option value="The Developers">The Developers</option>
                </select><br/>
                <input type="text"/><br/>
                <input type="submit" value="Finish Donation" />
            </form>
        </div>
    )
}

DonationModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

export default DonationModal