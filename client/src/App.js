import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (keyword) => {
    console.log('Searching for:', keyword)

  // Simulated search to test
  const results = [
    'apple',
    'Banana',
    'apple cider',
    'orange juice',
  ].filter(item => item.toLowerCase().includes(keyword.toLowerCase()));

  setSearchResults(results);
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
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
