import { Button } from 'components/SearchForm/SearchForm.styled';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

export const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { idMovie } = useParams();
  // useEffect(() => {
  //   getMovieDetails(idMovie)
  //     .then(resp => resp.json())
  //     .then(movie => console.log(movie))
  //     .catch(error => console.error('Error fetching movie details:', error));
  // }, [idMovie]);
  const handleClick = () => {
    navigate(location.state);
  };

  return (
    <>
      <Button onClick={handleClick}>Go back</Button>
    </>
  );
};
