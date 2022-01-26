import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import MainLayout from './MainLayout';
import Login from './Login';
import Dashboard from './Dashboard';
import Banner from './Banner';
import About from './About';

export default () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/banner', element: <Banner /> },
        { path: '/about', element: <About /> },
      ],
    },
    { path: '/login', element: <Login /> },
  ]);
  return routes;
};
