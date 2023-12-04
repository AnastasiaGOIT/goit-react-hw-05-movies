import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/api';
import { Button, Input, Form } from './SearchForm.styled';

export const SearchForm = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('value') ?? '';
  const updateQueryString = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchMovieSearch = async () => {
      setLoading(true);
      try {
        const response = await getMovieSearch(search);
        console.log(response);
        const movieSearch = await response.json();
        setValue(movieSearch.results);
        console.log(movieSearch);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
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
          value={query}
          onChange={updateQueryString}
        ></Input>
        <Button type="submit">Search</Button>
      </Form>
      {loading && <Loader />}
      <ul>
        {value &&
          value.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
