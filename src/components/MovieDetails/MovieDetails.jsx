import {
  Button,
  Container,
  Details,
  StyledNavLink,
} from './MovieDetails.styled';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      try {
        const response = await getMovieDetails(movieId);
        const movie = await response.json();
        setMovieDetails(movie);
        // console.log(movie);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);
  const handleClick = () => {
    navigate(backLinkLocationRef.current);
  };
  return (
    <>
      <div>
        <Button type="button" onClick={handleClick}>
          Go back
        </Button>
        {loading && <Loader />}
      </div>
      {movieDetails && (
        <>
          <Container>
            <div>
              <img
                src={
                  movieDetails.poster_path
                    ? `${base_url}${movieDetails.poster_path}`
                    : defaultImg
                }
                alt={movieDetails.title}
              />
            </div>
            <Details>
              <h2>{movieDetails.title}</h2>
              <p>User score: {movieDetails.vote_average}</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
            </Details>
          </Container>
          <h3>Additional information</h3>
          <ul>
            <li>
              <StyledNavLink to={'cast'}>Cast</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={'reviews'}>Reviews</StyledNavLink>
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
