import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
    title: 'shared/Loader',
    component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};

