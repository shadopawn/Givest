import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { totalDonated, totalDonationsForCharities } from '../firebaseFunctions'
import CharityCard from './CharityCard';
import { charityList } from '../charityInfo';

function AboutUs({donateButtonFunction}) {
    
    const [total, setTotal] = useState(0);
    const [charityTotalDonated, setCharityTotal] = useState();

    useEffect(() => {
        totalDonated(setTotal);
        totalDonationsForCharities(setCharityTotal);
    }, [])

    return (
        <div className="AboutUsContainer">
            <h2 className="AboutUsText" >What is Givest?</h2>
            <p className="AboutUsText">Givest is a website that allows you to donate to charity and see your donation ranked among other donors.</p>
            <h2 className="AboutUsText">How do we process donations?</h2>
            <p className="AboutUsText">Donations made throught Givest are sent directly to the charity of your choice.</p>
            <h2 className="AboutUsText">Charities</h2>
            <p className="AboutUsText">Total donated so far: ${total.toFixed(2)}</p>
            <table>
                <tbody>
                    {charityList.map((item, index) => (
                        <CharityCard key={index} charity={item} donateButtonFunction={donateButtonFunction} charityTotalDonated={charityTotalDonated}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

AboutUs.propTypes = {
    donateButtonFunction: PropTypes.func,
}

export default AboutUs