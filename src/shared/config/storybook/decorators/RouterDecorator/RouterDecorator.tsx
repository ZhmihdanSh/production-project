import { MemoryRouter } from 'react-router-dom';
import type { StoryFn } from '@storybook/react';

export const RouterDecorator = (Story: StoryFn) => {
    return (
        <MemoryRouter>
            <Story />
        </MemoryRouter>
    );
};
