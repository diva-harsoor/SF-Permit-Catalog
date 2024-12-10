import React, { useState } from 'react'

function Result({props}) {
    return (
        <div className="result">
            <div className="left">
                <h2>{props.name}</h2>
                <p>{props.agency}</p>
            </div>
            <div className="right">
                <a href={props.application_link} target="_blank" rel="noopener noreferrer">
                    <button className="apply-now">Apply now</button>
                </a>
                <p>${props.fees}</p>
            </div>
        </div>
    );
};

export default Result;