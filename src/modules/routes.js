import React, { lazy, Suspense } from 'react';
import { useRoutes, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import router from '@/common/router';

const routes = [
  {
    path: '/',
    component: lazy(() => import('./MainLayout')),
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', component: lazy(() => import('./Dashboard')), auth: true },
      { path: '/banner', component: lazy(() => import('./Banner')), auth: true },
      { path: '/about', component: lazy(() => import('./About')), auth: true },
    ],
  },
  { path: '/login', component: lazy(() => import('./Login')) },
];

// 路由处理方式
const generateRouter = (routes) => {
  const navigate = useNavigate(); // navigate(to, {replace, state})
  const location = useLocation();
  const params = useParams(); // <Route path="/:path" />
  Object.assign(router, { navigate, location, params });

  return routes.map((item) => {
    if (item.children) {
      item.children = generateRouter(item.children);
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

export default () => useRoutes(generateRouter(routes));
