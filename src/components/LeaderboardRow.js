import React from 'react';
import testLogo from '../assets/img/Black_Lives_Matter_Logo.png'

export default function LeaderboardRow({row, position}) {
    
    return (
        <tr data-testid="leaderboard-row">
            <td className="LeaderboardPosition">{position}</td>
            <td><img src={testLogo} alt="Logo" /></td>
            <td>
                <p className="LeaderboardName">{row.name}</p>
                <p className="LeaderboardDonationText">Donated ${row.donationAmount.toFixed(2)} to {row.charity}</p>
            </td>
            <td><a href={row.customLink} target="_blank" rel="noopener noreferrer">LINK</a></td>
        </tr>
    )
}