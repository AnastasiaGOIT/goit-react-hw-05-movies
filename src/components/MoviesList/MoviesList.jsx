import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrends } from 'services/api';
import { StyledLink, Title } from './MovieList.styled';
import { Loader } from '../Loader/Loader';

export const MoviesList = () => {
  const location = useLocation();

  const [trends, setTrends] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getTrends()
      .then(resp => resp.json())
      .then(trends => setTrends(trends.results))
      .finally(setLoading(false));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {loading && <Loader />}
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
      </ul>
    </>
  );
};
