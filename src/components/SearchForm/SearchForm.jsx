import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useState } from 'react';
// import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Button, Input, Form } from './SearchForm.styled';

export const SearchForm = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ value: e.target.value });
  };
  const search = searchParams.get('value') ?? '';

  //   const handleSearch = ({ target }) => {
  //     setValue(target.value);
  //   };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <>
      <Form role="search" onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={updateQueryString}
        ></Input>
        <Button type="submit">Search</Button>
      </Form>
      {/* <MovieDetails value={search} /> */}
    </>
  );
};
