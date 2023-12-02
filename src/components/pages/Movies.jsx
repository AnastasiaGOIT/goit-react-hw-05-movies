import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Movies = () => {
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);
  return (
    <>
      <SearchForm />
    </>
  );
};
export default Movies;
