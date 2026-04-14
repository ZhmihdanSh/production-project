import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        to: '/',
        children: 'AppLink',
    },
};

export const Inverted: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
        to: '/',
        children: 'AppLink',
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        to: '/',
        children: 'AppLink',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const InvertedDark: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
        to: '/',
        children: 'AppLink',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

