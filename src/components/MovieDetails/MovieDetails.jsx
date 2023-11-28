import React, { useState, useEffect } from 'react';
import { getMovieDetails } from 'services/api';

export const MovieDetails = ({ value }) => {
  const [details, setDetails] = useState(null);
  // useEffect(() => {
  //   getMovieDetails()
  //     .then(resp => resp.json())
  //     .then(details => console.log(details));
  // });
  return <div></div>;
};
