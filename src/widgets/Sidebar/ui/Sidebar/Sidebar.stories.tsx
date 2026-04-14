import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};

