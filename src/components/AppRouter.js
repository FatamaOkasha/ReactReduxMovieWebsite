import React from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Movies from './Movies';
import About from '../pages/About';
import Error from '../pages/Error';
import FavoriteDetails from '../pages/FavoriteDetails';
import Register from './Register';
import MovieDetails from '../pages/MovieDetails';
import MovieModule from '../pages/MovieModule';
import UpdatePage from '../pages/UpdatePage';
import CreateMovie from '../pages/CreateMovie';
import Profile from '../pages/Profile';
import Landing from '../pages/Landing.js';


const AppRouter = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      errorElement: <Error />,
    },
    {
      path: '/register',
      element: <Register />,
      errorElement: <Error />,
    },
    {
      path: '/main',
      element: isAuthenticated ? <MovieModule /> : <Navigate to="/register" />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Movies /> },
        { path: 'movies/:id', element: <MovieDetails /> },
        { path: 'about', element: <About /> },
        { path: 'favorites', element: <FavoriteDetails /> },
        { path: 'create', element: <CreateMovie /> },
        { path: 'update/:id', element: <UpdatePage /> },
        { path: 'profile', element: <Profile /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
