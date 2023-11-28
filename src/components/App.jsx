import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="movies" element={<MoviesPage />} />
        </Route>
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
