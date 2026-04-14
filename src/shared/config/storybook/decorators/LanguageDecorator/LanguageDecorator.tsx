import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import type { StoryFn } from '@storybook/react';

export const LanguageDecorator = (Story: StoryFn) => {
    return (
        <Suspense fallback="">
            <I18nextProvider i18n={i18nForTests}>
                <Story />
            </I18nextProvider>
        </Suspense>
    );
};
