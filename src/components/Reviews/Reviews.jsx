import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

export const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [movieReviews, setMovieReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setLoading(true);
      try {
        const response = await getMovieReviews(movieId);
        const reviews = await response.json();
        setMovieReviews(reviews.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);
  console.log(movieReviews);

  return (
    <div>
      {loading && <Loader />}
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
