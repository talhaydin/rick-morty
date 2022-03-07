import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataList from './components/DataList/DataList';
import Header from './components/Header/Header';

function App() {
  const [data, setData] = useState({ results: [] });
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');

  document.title = 'Rick & Morty App'; /* sets the title */

  /* async function that pulls data from api */
  const fetchData = async () => {
    const result = await axios(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    );
    setData(result.data);
  };

  /* lifecycle effect that runs the api call function */
  useEffect(() => {
    fetchData();
  }, [search]);

  /* form handler, belongs to DataList component */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchQuery);
  };

  return (
    <div className="App">
      <Header></Header>
      <DataList
        data={data}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
      ></DataList>
    </div>
  );
}

export default App;
