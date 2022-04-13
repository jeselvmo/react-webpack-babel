import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import router from '@/common/router';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./main-layout')),
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', component: lazy(() => import('./dashboard')), auth: true },
      { path: '/banner', component: lazy(() => import('./banner')), auth: true },
      { path: '/about', component: lazy(() => import('./about')), auth: true },
      { path: '/exceljs', component: lazy(() => import('./excel-js')), auth: true },
    ],
  },
  { path: '/login', component: lazy(() => import('./login')) },
];

// 路由处理方式
// eslint-disable-next-line no-shadow
const generateRoutes = (routes) => {
  const navigate = useNavigate(); // navigate(to, {replace, state})
  const location = useLocation();
  const params = useParams(); // <Route path="/:path" />
  Object.assign(router, { navigate, location, params });

  return routes.map((item) => {
    if (item.children) {
      item.children = generateRoutes(item.children);
    }
    if (item.component) {
      item.element = (
        <Suspense fallback={<div>Loading...</div>}>
          <item.component />
        </Suspense>
      );
    }
    return item;
  });
};

export default () => useRoutes(generateRoutes(routes));
