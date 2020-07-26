import React from 'react'
import PropTypes from 'prop-types'

function CharityCard({charity}) {
    return (
        <tr>
            <td>
                <img src={charity.logoURL} alt="logo"/>
            </td>
            <td>
                <a href={charity.link} target="_blank" rel="noopener noreferrer">{charity.name}</a>
                <p>total donations: 0</p>
                <p>{charity.description}</p>
            </td>
        </tr>
    )
}

CharityCard.propTypes = {
    charity: PropTypes.object.isRequired
}

export default CharityCard