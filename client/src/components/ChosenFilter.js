import React, {useState} from 'react';

function ChosenFilter ({value}) {
    return (
        <div className="chosen-filter">
            <p className="chosen-filter">{value}</p>
            <button className="chosen-filter">x</button>
        </div>
    )
};

export default ChosenFilter;