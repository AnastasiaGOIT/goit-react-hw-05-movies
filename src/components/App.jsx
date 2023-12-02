import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import Layout from './Layout';
import { MovieDetails } from './MovieDetails/MovieDetails';
// import { Home } from './pages/Home';
// import { Movies } from './pages/Movies';
import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';
const Home = lazy(() => import('../components/pages/Home'));
const Movies = lazy(() => import('../components/pages/Movies'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}></Route>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />}></Route>
      </Routes>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      ></div>
    </>
  );
};
