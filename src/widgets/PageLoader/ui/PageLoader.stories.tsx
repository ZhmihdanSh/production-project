import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};

