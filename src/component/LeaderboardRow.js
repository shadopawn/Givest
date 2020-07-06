import React from 'react'

export default function LeaderboardRow(props) {
    const row = props.row;
    return (
        <tbody>
            <tr>
                <td>{row.position}</td>
                <td>{row.dollarAmmount}</td>
                <td>{row.name}</td>
                <td>{row.charity}</td>
                <td><a href={row.linkURL} target="_blank" rel="noopener noreferrer">Link</a></td>
            </tr>
        </tbody>
    )
}
