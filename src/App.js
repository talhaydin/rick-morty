import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataList from './components/DataList';

function App() {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://rickandmortyapi.com/api/character');
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <DataList data={data}></DataList>
    </div>
  );
}

export default App;
