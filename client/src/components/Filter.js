import React, { useState } from 'react'

function Filter({value, setValue, onFilter}) {

    const handleChange = (event) => {
        setValue(event.target.value);
        onFilter(event.target.value);
    };
   
    return (
        <select value={value} onChange={handleChange}>
            <option value="">Select Issuing Agency</option>
            <option value="Public Works">Public Works</option>
            <option value="City Administrator">City Administrator</option>
            <option value="MTA">MTA</option>
            <option value="Planning">Planning</option>
        </select>
    )
}

export default Filter;