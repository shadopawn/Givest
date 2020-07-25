import React, { useState, useEffect } from 'react'
import { totalDonated } from '../firebaseFunctions'

export default function AboutUs() {
    
    const [total, setTotal] = useState(0);

    useEffect(() => {
        totalDonated(setTotal);
    }, [])

    return (
        <div>
            <h3>What is Givest?</h3>
            <p>Givest is a website that allows you to donate to charity and see your donation ranked among other donors.</p>
            <h3>How we process donations</h3>
            <p>Donation made throught Givest are sent directly to the charity of your choice</p>
            <h3>Total donations</h3>
            <p>Total donated so far: ${total.toFixed(2)}</p>
            <h3>Charities</h3>
        </div>
    )
}
