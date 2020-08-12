import React from 'react'

export default function LeaderboardRow({row, position}) {
    
    return (
        <tr data-testid="leaderboard-row">
            <td>{position}</td>
            <td>${row.donationAmount.toFixed(2)}</td>
            <td>{row.name}</td>
            <td>{row.charity}</td>
            <td><a href={row.customLink} target="_blank" rel="noopener noreferrer">Link</a></td>
        </tr>
    )
}
