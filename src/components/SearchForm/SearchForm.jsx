import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { StyledLink } from 'components/MoviesList/MovieList.styled';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
// import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/api';

import { Button, Input, Form } from './SearchForm.styled';

export const SearchForm = () => {
  const [value, setValue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('value') ?? '';

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ value: e.target.value });
  };

  useEffect(() => {
    const fetchMovieSearch = async () => {
      try {
        const response = await getMovieSearch(search);
        const movieSearch = await response.json();
        setValue(movieSearch.results || []);
        console.log(movieSearch);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieSearch();
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
  };
  console.log(value);
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
      <ul>
        {value &&
          value.map(movie => {
            return (
              <li key={movie.id}>
                <Link>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
