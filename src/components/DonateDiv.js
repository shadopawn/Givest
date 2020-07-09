import React from 'react'

export default function DonateDiv({insertLeaderboardRow}) {
    
    const handleClick = (word) => {
        insertLeaderboardRow({position: 0, dollarAmmount:99.00, name:"Testy", charity:"test", linkURL:"https://www.w3schools.com/html/html_links.asp"});
        //console.log(word);
    }

    return (
        <div className="DonateDiv">
            <h4>Start competeing</h4>
            <button type="button" onClick={() => handleClick("donate button clicked")} >Donate now</button>
        </div>
    )
}
