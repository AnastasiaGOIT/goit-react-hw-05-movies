import { useEffect, useState } from 'react';

import { Link, useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/api';

import { Button, Input, Form } from './SearchForm.styled';

export const SearchForm = () => {
  const [value, setValue] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('value') ?? '';

  const updateQueryString = e => {
    setQuery(e.target.value);
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
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ value: query });
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
