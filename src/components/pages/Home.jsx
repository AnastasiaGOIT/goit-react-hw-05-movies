import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrends } from 'services/api';
import { Title } from 'components/MoviesList/MovieList.styled';

const Home = () => {
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    getTrends()
      .then(trends => setValue(trends.results))
      .finally(setLoading(false));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <MoviesList value={value} location={location} loading={loading} />
    </>
  );
};
export default Home;
