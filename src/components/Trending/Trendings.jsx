import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrends } from 'services/api';
import { StyledNavLink, Title } from './Trending.styled';

export const Trendings = () => {
  const [trends, setTrends] = useState(null);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTrends()
      .then(resp => resp.json())
      .then(trends => setTrends(trends.results));
  });

  return (
    <>
      <Title>Trending today</Title>
      <ul>
        {trends &&
          trends.map(trend => {
            return <StyledNavLink key={trend.id}>{trend.title}</StyledNavLink>;
          })}
      </ul>
    </>
  );
};
