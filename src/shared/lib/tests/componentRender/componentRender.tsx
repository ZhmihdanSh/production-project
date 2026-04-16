import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { RoutePaths } from 'app/providers/router/lib/routesConfig';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import type { FC } from 'react';

export interface ComponentRenderOptions {
    route?: RoutePaths;
}

export const componentRender = (Component: FC, options: ComponentRenderOptions = {}) => {
    const {
        route = RoutePaths.MAIN,
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                <Component />
            </I18nextProvider>
        </MemoryRouter>,
    );
};

