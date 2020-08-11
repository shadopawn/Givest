import React from 'react'
import './LeftPanel.css';
import DonationForm from './DonationForm'

export default function LeftPanel() {
    return (
        <div className="LeftPanel">
            <h1>Welcome to Givest</h1>
            <h4>About us</h4>
            <DonationForm />
        </div>
    )
}
