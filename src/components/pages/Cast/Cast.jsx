import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await getMovieCast(movieId);
        const cast = await response.json();
        setMovieCast(cast);
        console.log(cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieCast();
  }, []);
  movieCast.map(actor => console.log(actor));
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Cast;
