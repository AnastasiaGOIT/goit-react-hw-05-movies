import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';

export const Cast = () => {
  const base_url = 'https://image.tmdb.org/t/p/w300';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=300x300';

  const { movieId } = useParams();
  console.log(movieId);

  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await getMovieCast(movieId);
        const cast = await response.json();
        setMovieCast(cast.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieCast();
  }, [movieId]);
  console.log(movieCast);
  return (
    <div>
      <ul>
        {movieCast &&
          movieCast.map(({ id, profile_path, name }) => {
            return (
              <li key={id}>
                <img
                  src={profile_path ? `${base_url}${profile_path}` : defaultImg}
                  alt={name}
                />
                <p>{name}</p>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </div>
  );
};
