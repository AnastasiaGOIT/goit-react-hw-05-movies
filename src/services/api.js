const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '26fce909cdd1b98f6a62bcad27e7c97f';

export const getTrends = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
};

// export const getMovieDetails = id => {
//   return fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
// };
