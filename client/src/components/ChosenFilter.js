import React, {useState} from 'react';

function ChosenFilter ({value, onX}) {
    return (
        <div className="chosen-filter">
            <p className="chosen-filter">{value}</p>
            <button onClick={() => onX("")} className="chosen-filter">x</button>
        </div>
    )
};

export default ChosenFilter;