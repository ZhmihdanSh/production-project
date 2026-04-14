import { LanguageDecorator } from 'shared/config/storybook/decorators/LanguageDecorator/LanguageDecorator';
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator/RouterDecorator';
import { StyleDecorator } from 'shared/config/storybook/decorators/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import type { Preview } from '@storybook/react-webpack5';

const preview: Preview = {
    parameters: {
        a11y: {
            config: {
                rules: [
                    {
                        id: 'color-contrast',
                        enabled: false,
                    },
                ],
            },
        },
    },
    decorators: [
        ThemeDecorator,
        StyleDecorator,
        RouterDecorator,
        LanguageDecorator,
    ],
};

export default preview;
