import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import type { RouteProps } from 'react-router-dom';

export enum RouteNames {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT',
    NOT_FOUND = 'NOT_FOUND',
}

export enum RoutePaths {
    MAIN = '/',
    ABOUT = '/about',
    NOT_FOUND = '*',
}

export type Routes = Record<RouteNames, RouteProps>;

export const routesConfig: Routes = {
    [RouteNames.MAIN]: {
        path: RoutePaths.MAIN,
        Component: MainPage,
    },
    [RouteNames.ABOUT]: {
        path: RoutePaths.ABOUT,
        Component: AboutPage,
    },
    [RouteNames.NOT_FOUND]: {
        path: RoutePaths.NOT_FOUND,
        Component: NotFoundPage,
    },
};
