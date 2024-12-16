import React, { useState } from 'react';

const SearchBar = ({ keyword, setKeyword, onSearch }) => {

    const handleChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        onSearch(keyword); // Call the onSearch function passed as a prop
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={keyword}
                onChange={handleChange}
                placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;