import React from 'react'
import PropTypes from 'prop-types'

function CharityCard({charity}) {
    return (
        <tr>
            <td>
                <img src={charity.logoURL} alt="logo"/>
            </td>
            <td>
                <h4><a href={charity.link} target="_blank" rel="noopener noreferrer">{charity.name}</a></h4>
                <p>total donations: 0</p><br/>
                <p>{charity.description}</p>
            </td>
        </tr>
    )
}

CharityCard.propTypes = {
    charity: PropTypes.object.isRequired
}

export default CharityCard