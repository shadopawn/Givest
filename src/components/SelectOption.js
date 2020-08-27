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
        logo: PropTypes.string,
    }),
}

export default SelectOption