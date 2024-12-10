import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);  

  const handleSearch = async (keyword) => {
    console.log('Searching for:', keyword)

    try {
      const response = await fetch(`http://localhost:3001/permits?name=${keyword}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data from the server');
      }
      const data = await response.json();
      setSearchResults(data); 
    } catch (error) {
      console.error('error fetching data:', error);
    }

};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Bar Example</h1>
      </header>
      <SearchBar onSearch={handleSearch} />

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
