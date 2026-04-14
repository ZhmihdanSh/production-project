import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};

