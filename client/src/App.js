import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import Filter from './components/Filter';
import ChosenFilter from './components/ChosenFilter';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [value, setValue] = useState("");

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

const handleFilter = async (filter) => {
  console.log('Filtering by:', filter);

  try {
    const response = await fetch(`http://localhost:3001/permits?agency=${filter}`);
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
        <h1>SF Permit Catalog</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <Filter value={value} setValue={setValue} onFilter={handleFilter} />
      <ChosenFilter value={value}/>

      {searchResults.length > 0 && (
        <div>
          <h2>Results for your search</h2>
          <ul className="no-bullets">
            {searchResults.map((result, index) => (
              <li key={index}> <Result props={result}/> </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
