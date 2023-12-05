import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/api';

const Movies = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState([]);
  const search = searchParams.get('value') ?? '';
  const [query, setQuery] = useState('');

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

  const updateQueryString = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ value: query });
  };
  return (
    <>
      <SearchForm
        handleSubmit={handleSubmit}
        query={query}
        updateQueryString={updateQueryString}
      />
      {loading && <Loader />}
      {value.length > 0 && (
        <MoviesList value={value} location={location} loading={loading} />
      )}
    </>
  );
};
export default Movies;
