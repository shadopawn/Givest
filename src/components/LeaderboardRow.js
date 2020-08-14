import React from 'react';
import PropTypes from 'prop-types'
import defaultLogo from '../assets/img/Developers.png'
import { charityList } from '../charityInfo';

function LeaderboardRow({row, position}) {
    
    let renderedLogo;

    charityList.forEach(charity => {
        if (row.charity === charity.name){
            renderedLogo = charity.logo;
        }
    })

    renderedLogo = renderedLogo ?? defaultLogo;

    return (
        <tr data-testid="leaderboard-row">
            <td className="LeaderboardPosition">{position}</td>
            <td><img src={renderedLogo} alt="Logo" /></td>
            <td>
                <p className="LeaderboardName">{row.name}</p>
                <p className="LeaderboardDonationText">Donated ${row.donationAmount.toFixed(2)} to {row.charity}</p>
            </td>
            <td><a href={row.customLink} target="_blank" rel="noopener noreferrer">LINK</a></td>
        </tr>
    )
}

LeaderboardRow.propTypes = {
    row: PropTypes.exact({
        name: PropTypes.string,
        donationAmount: PropTypes.number,
        charity: PropTypes.string,
        customLink: PropTypes.string,
    }),
}

export default LeaderboardRow