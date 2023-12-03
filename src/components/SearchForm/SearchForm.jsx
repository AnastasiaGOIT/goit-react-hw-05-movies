import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
// import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/api';

import { Button, Input, Form } from './SearchForm.styled';

export const SearchForm = () => {
  const [value, setValue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ value: e.target.value });
  };
  const search = searchParams.get('value') ?? '';
  useEffect(() => {
    const fetchMovieSearch = async () => {
      try {
        const response = await getMovieSearch(searchParams);
        const movieSearch = await response.json();
        setValue(movieSearch);
        console.log(movieSearch);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieSearch();
  }, [searchParams]);

  //   const handleSearch = ({ target }) => {
  //     setValue(target.value);
  //   };
  const handleSubmit = e => {
    e.preventDefault();
  };
  // const visibleMovies = value
  //   ? value && value.filter(movie => movie.title.includes(value))
  //   : [];
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
      {/* {visibleMovies.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))} */}
    </>
  );
};
