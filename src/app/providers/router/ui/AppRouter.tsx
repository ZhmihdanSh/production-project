import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.entries(routeConfig)
                    .map(([route, options]) =>
                        <Route element={options.element} key={route} path={options.path} />
                    )}
            </Routes>
        </Suspense>
    );
};
