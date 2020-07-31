import React from 'react'
import PropTypes from 'prop-types'

function SelectOption({charity}) {
    return (
        <option value={charity.name}>{charity.name}</option>
    )
}

SelectOption.propTypes = {
    charity: PropTypes.exact({
        name: PropTypes.string,
        link: PropTypes.string,
        description: PropTypes.string,
        logoURL: PropTypes.string,
        totalDonated: PropTypes.number,
    }),
}

export default SelectOption