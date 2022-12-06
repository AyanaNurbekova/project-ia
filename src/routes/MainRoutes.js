import React from 'react';
import Movies from '../components/Movies/Movies';
import HomePage from '../components/Home/HomePage';
import {  Route, Routes } from 'react-router-dom';
import AddMovies from '../components/AddMovies/AddMovies';
import Auth  from '../components/Auth/Auth';
import SignUp from '../components/Auth/SignUp';
import Netflix from '../components/Netflix/Netflix';



const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: '/netflixmain', element: <Netflix />, id: 1 },
        { link: '/home', element: <HomePage />, id: 2 },
        { link: '/movies', element: <Movies />, id: 3 },
        { link: '/addmovies', element: <AddMovies />, id: 4 },
        { link: '/auth', element: <Auth/>, id: 5},
        { link: '/signup', element: <SignUp/>, id: 6},

      ];

      // const PRIVATE_ROUTES = [
      //   { link: '/edit/:id', element: <EditProductPage />, id: 7 },
      //   { link: '/admin', element: <AdminPage />, id: 3 },
      // ];

      return (
        <>
          <Routes>
            {PUBLIC_ROUTES.map((item) => (
              <Route path={item.link} element={item.element} key={item.id} />
            ))}


           {/* {user
            ? PRIVATE_ROUTES.map((item) => (
              <Route
                key={item.id}
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to='*' />
                  )
                }
              />
            ))
          : null} */}
          </Routes>
        </>
      );
    };
export default MainRoutes;