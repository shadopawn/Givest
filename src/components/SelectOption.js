import React from 'react'

export default function SelectOption({charity}) {
    return (
        <option value={charity.charityName}>{charity.charityName}</option>
    )
}
