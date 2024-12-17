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
  const [keyword, setKeyword] = useState("");

  const constructQuery = (keyword, agency) => {
    let query = 'http://localhost:3001/permits?';
    if (keyword) query += `name=${encodeURIComponent(keyword)}`;
    if (agency) query += `${keyword ? '&' : ''}agency=${encodeURIComponent(agency)}`;
    return query;
  };

  const handleSearch = async (updatedKeyword = keyword, updatedValue = value) => {
    console.log('Searching with:', { updatedKeyword, updatedValue });
    const query = constructQuery(updatedKeyword, updatedValue);
    console.log("Query:", query)

    try {
      const response = await fetch(query);
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
  const query = constructQuery(keyword, filter);
  console.log(query);

  try {
    const response = await fetch(query);
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
      <SearchBar keyword={keyword} setKeyword={setKeyword} onSearch={handleSearch} />
      <Filter value={value} setValue={setValue} onFilter={handleFilter} />
      {keyword && (<ChosenFilter value={keyword} onX={() => {
        setKeyword("");
        handleSearch("", value);
      }}/>)}
      {value && (<ChosenFilter value={value} onX={() => {
        setValue("");
        handleSearch(keyword, "");
      }}/>)}
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
