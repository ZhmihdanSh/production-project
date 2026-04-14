import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import type { StoryContext, StoryFn } from '@storybook/react';

export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
    const theme = context.parameters.theme || Theme.LIGHT;

    return (
        <ThemeProvider initialTheme={theme}>
            <div className={classNames('app', {}, [theme])}>
                <Story {...context} />
            </div>
        </ThemeProvider>
    );
};
