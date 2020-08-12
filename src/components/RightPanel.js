import React from 'react';
import './RightPanel.css';
import Leaderboard from './Leaderboard';


export default function RightPanel() {
    return (
        <div className="RightPanel">
            <h1>Top donations</h1>
            <Leaderboard />
        </div>
    )
}
