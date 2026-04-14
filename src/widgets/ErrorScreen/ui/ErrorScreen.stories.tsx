import { Theme } from 'app/providers/ThemeProvider';
import { ErrorScreen } from './ErrorScreen';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
    title: 'widgets/ErrorScreen',
    component: ErrorScreen,
} satisfies Meta<typeof ErrorScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = { };

export const PrimaryDark: Story = {
    parameters: {
        theme: Theme.DARK,
    },
};

