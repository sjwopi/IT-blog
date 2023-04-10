import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { routesConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routesConfig).map(({ element, path }) => {
          <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
