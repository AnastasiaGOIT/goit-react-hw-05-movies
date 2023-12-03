import { Button } from 'components/SearchForm/SearchForm.styled';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'services/api';

export const MovieDetails = () => {
  const base_url = 'https://image.tmdb.org/t/p/w300';

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=300x300';
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  console.log(movieId);

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);
        const movie = await response.json();
        setMovieDetails(movie);
        // console.log(movie);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  const handleClick = () => {
    navigate(backLinkLocationRef.current);
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        Go back
      </button>
      {movieDetails && (
        <>
          <img
            src={
              movieDetails.poster_path
                ? `${base_url}${movieDetails.poster_path}`
                : defaultImg
            }
            alt={movieDetails.title}
          />
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.vote_average}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to={'cast'}>Cast</Link>
            </li>
            <li>
              <Link to={'reviews'}>Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};
