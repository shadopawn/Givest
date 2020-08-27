import React from 'react'
import PropTypes from 'prop-types'

function CharityCard({charity, donateButtonFunction, charityTotalDonated}) {
    
    let charityDonationSum = 0;
    if(charityTotalDonated){
        charityDonationSum = charityTotalDonated[charity.name] ?? 0;
    }
    
    return (
        <tr>
            <td>
                <img src={charity.logo} alt="logo"/>
            </td>
            <td>
                <a href={charity.link} target="_blank" rel="noopener noreferrer">{charity.name}</a>
                <p>total donations: ${charityDonationSum.toFixed(2)}</p>
            </td>
            <td>
                <button type="button" onClick={() => donateButtonFunction()}>DONATE</button>
            </td>
        </tr>
    )
}

CharityCard.propTypes = {
    charity: PropTypes.exact({
        name: PropTypes.string,
        link: PropTypes.string,
        description: PropTypes.string,
        logo: PropTypes.string,
    }),
    donateButtonFunction: PropTypes.func,
    charityTotalDonated: PropTypes.object,
}

export default CharityCard