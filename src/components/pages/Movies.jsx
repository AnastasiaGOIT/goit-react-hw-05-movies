import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieSearch } from 'services/api';
//

const Movies = () => {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('value') ?? '';

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

  return (
    <>
      <SearchForm loading={loading} value={value} />
      <ul>
        {value &&
          value.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`${movie.id}`} state={location}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default Movies;
