import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';

import { Button, Input, Form } from './Movies.styled';

export const Movies = () => {
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
      <Form role="search" onSubmit={handleSubmit}>
        <Input
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={value}
          onChange={handleSearch}
        ></Input>
        <Button type="submit">Search</Button>
      </Form>
      <MovieDetails value={value} />
    </>
  );
};
