import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

export const Reviews = () => {
  const base_url = 'https://image.tmdb.org/t/p/w300';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=300x300';

  const { movieId } = useParams();
  console.log(movieId);

  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await getMovieReviews(movieId);
        const reviews = await response.json();
        setMovieReviews(reviews.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieReviews();
  }, [movieId]);
  console.log(movieReviews);
  return (
    <div>
      {movieReviews.length === 0 && (
        <p>We don't have any reviews of this movie</p>
      )}
      <ul>
        {movieReviews &&
          movieReviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </div>
  );
};
