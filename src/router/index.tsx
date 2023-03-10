import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { lazy } from 'react';

// 懒加载一级路由

const Main = lazy(() => import('@/views/main'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/main"></Navigate>,
  },
  {
    path: '/main',
    element: <Main></Main>,
  },
];

export default routes;
