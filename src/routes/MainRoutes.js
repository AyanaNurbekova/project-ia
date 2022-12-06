import React from 'react';
import Movies from '../components/Movies/Movies';
import HomePage from '../components/Home/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddMovies from '../components/AddMovies/AddMovies';
import EditMovies from '../components/EditMovies/EditMovies';
import Player from '../components/Player/Player';
import MyList from '../components/MyList/MyList';
import NodeFoundPage from '../components/NodeFoundPage/NodeFoundPage';


const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: '/', element: <HomePage />, id: 1 },
        { link: '/movies', element: <Movies />, id: 2 },
        { link: '/addmovies', element: <AddMovies />, id: 3 },
        { link: '/edit/:id', element: <EditMovies />, id: 4 },
        { link: '/player/:id', element: <Player />, id: 5 },
        { link: '/mylist', element: <MyList />, id: 6 },
        { link: '*', element: <NodeFoundPage />, id: 7 },
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