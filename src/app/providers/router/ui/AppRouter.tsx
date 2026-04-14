import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routesConfig } from '../lib/routesConfig';

export const AppRouter = memo(() => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.entries(routesConfig).map(([route, options]) => (
                <Route
                    path={options.path}
                    key={route}
                    element={<div className="page"><options.Component /></div>}
                />
            ))}
        </Routes>
    </Suspense>
));
