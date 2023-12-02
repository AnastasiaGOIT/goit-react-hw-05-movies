import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getTrends } from 'services/api';
import { StyledLink, Title } from './Trending.styled';

export const MoviesList = () => {
  const location = useLocation();

  const [trends, setTrends] = useState(null);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTrends()
      .then(resp => resp.json())
      .then(trends => setTrends(trends.results));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <ul>
        {trends &&
          trends.map(trend => {
            return (
              <li key={trend.id}>
                <StyledLink to={`movies/${trend.id}`} state={location}>
                  {trend.title}
                </StyledLink>
              </li>
            );
          })}
        {/* <MovieDetails /> */}
        {/* <Outlet /> */}
      </ul>
    </>
  );
};
