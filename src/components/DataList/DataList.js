import React from 'react';
import { useState } from 'react';
import './DataList.scss';

export default function DataList({
  data,
  searchQuery,
  setSearchQuery,
  handleSubmit,
}) {
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="searchForm">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchForm__input"
          placeholder="Search your favourite character!"
        />
        <button type="submit" className="searchForm__submitBtn">
          Search
        </button>
      </form>
      <div className="characters">
        <ol className="characters__list">
          {data.results.map((item) => (
            <li key={item.id} className="characters__list--item">
              <p>{item.name}</p>
              <img alt={item.name} src={item.image}></img>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
