import React from 'react'

export default function SelectOption({charity}) {
    return (
        <option value={charity.name}>{charity.name}</option>
    )
}
