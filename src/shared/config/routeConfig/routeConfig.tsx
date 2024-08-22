import type { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ErrorPage } from 'pages/ErrorPage';

enum RouteNames {
    main = 'main',
    about = 'about',
    error = 'error',
}

export enum RoutePaths {
    main = '/',
    about = '/about',
    error = '*'
}

type Route = Record<RouteNames, RouteProps>

export const routeConfig: Route = {
    [RouteNames.main]: {
        path: RoutePaths.main,
        element: <MainPage />
    },
    [RouteNames.about]: {
        path: RoutePaths.about,
        element: <AboutPage />
    },

    // Последний
    [RouteNames.error]: {
        path: RoutePaths.error,
        element: <ErrorPage />
    }
};
