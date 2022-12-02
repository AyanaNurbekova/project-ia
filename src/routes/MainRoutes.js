import React from 'react';
import Movies from '../components/Movies/Movies';
import HomePage from '../components/Home/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddMovies from '../components/AddMovies/AddMovies';


const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: '/', element: <HomePage />, id: 1 },
        { link: '/movies', element: <Movies />, id: 2 },
        { link: '/addmovies', element: <AddMovies />, id: 3 },
      ];

      return (
        <>
          <Routes>
            {PUBLIC_ROUTES.map((item) => (
              <Route path={item.link} element={item.element} key={item.id} />
            ))}
          </Routes>
        </>
      );
    };
export default MainRoutes;