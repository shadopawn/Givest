import React from 'react'
import PropTypes from 'prop-types'

function CharityCard({charity}) {
    return (
        <tr>
            <td>
                <img src={charity.logo} alt="logo"/>
            </td>
            <td>
                <a href={charity.link} target="_blank" rel="noopener noreferrer">{charity.name}</a>
                <p>total donations: {charity.totalDonated}</p>
                <p>{charity.description}</p>
            </td>
        </tr>
    )
}

CharityCard.propTypes = {
    charity: PropTypes.exact({
        name: PropTypes.string,
        link: PropTypes.string,
        description: PropTypes.string,
        logo: PropTypes.string,
        totalDonated: PropTypes.number,
    }),
}

export default CharityCard