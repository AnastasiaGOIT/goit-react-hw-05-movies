import React, { useEffect, useState } from 'react';

export const MoviesPage = () => {
  const [value, setValue] = useState('');
  const handleSearch = ({ target }) => {
    setValue(target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <>
      <form role="search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={value}
          onChange={handleSearch}
        ></input>
        <button type="submit"></button>
      </form>
    </>
  );
};
