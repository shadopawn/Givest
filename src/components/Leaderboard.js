import React, {useState, useEffect } from 'react'
import LeaderboardRow from './LeaderboardRow'
import { readDonationData } from '../firebaseFunctions';

export default function Leaderboard(props) {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        readDonationData(setRows);
    }, [])
    
    const renderedRows = props.rows ? props.rows : rows;

    return (
        <div className="LeaderboardContainer">
            <table className="Leaderboard" data-testid="leaderboard">
                <tbody>
                    {renderedRows.map((item, index) => (
                        <LeaderboardRow key={index} row={item} position={index+1} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
