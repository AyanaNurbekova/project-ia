import React from 'react';
import Movies from '../components/Movies/Movies';
import HomePage from '../components/Home/HomePage';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddMovies from '../components/AddMovies/AddMovies';
import SignUp from '../components/Auth/SignUp';
import { ADMIN } from '../const';
import EditMovies from '../components/EditMovies/EditMovies';
import Player from '../components/Player/Player';
import MyList from '../components/MyList/MyList';
import NodeFoundPage from '../components/NodeFoundPage/NodeFoundPage';
import { useAuth } from '../contexts/AuthContextProvider';
import Reactflix from '../components/ReactFlix/Reactflix';
import AdminPage from '../components/Admin/AdminPage';
import Auth from '../components/Auth/Auth';


const MainRoutes = () => {
  const { user } = useAuth();
    const PUBLIC_ROUTES = [
       { link: '/', element: <Reactflix/>, id: 1 },
        { link: '/auth', element: <Auth/>, id: 2},
        { link: '/signup', element: <SignUp/>, id: 4},
        { link: '/main', element: <HomePage />, id: 5 },
        { link: '/movies', element: <Movies />, id: 6},
        { link: '/player/:id', element: <Player />, id: 8 },
        { link: '/mylist', element: <MyList />, id: 9 },
        { link: '*', element: <NodeFoundPage />, id: 11 },
      ];

      const PRIVATE_ROUTES = [
        { link: '/edit/:id', element: <EditMovies />, id: 10 },
        { link: '/admin', element: <AdminPage/>, id: 3 },
        { link: '/addmovies', element: <AddMovies />, id: 7 },

      ];

      return (
        <>
          <Routes>
            {PUBLIC_ROUTES.map((item) => (
              <Route path={item.link} element={item.element} key={item.id} />
            ))}


            {user
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
              : null}
           
          </Routes>
        </>
      );
    };
export default MainRoutes;