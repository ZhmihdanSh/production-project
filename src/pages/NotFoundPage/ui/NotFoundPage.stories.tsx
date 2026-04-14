import { Theme } from 'app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};
