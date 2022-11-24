import React, {Suspense} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from '../../routes';

export default function AppContent() {
  return (
    <Suspense fallback={<p>dev</p>}>
      <Routes>
        {routes.map((route, index) => (
            route.element && (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          ))}
        <Route path="/" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </Suspense>
  );
}
