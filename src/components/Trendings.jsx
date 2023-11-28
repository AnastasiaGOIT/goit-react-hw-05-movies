import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrends } from 'services/api';

export const Trendings = () => {
  const [trends, setTrends] = useState(null);
  useEffect(() => {
    getTrends()
      .then(resp => resp.json())
      .then(trends => setTrends(trends.results));
  });

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trends &&
          trends.map(trend => {
            return <Link key={trend.id}>{trend.title}</Link>;
          })}
      </ul>
    </>
  );
};
