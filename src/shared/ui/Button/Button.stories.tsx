import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Button',
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};

export const OutlineInverted: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: 'Button',
    },
};

export const ClearDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const ClearInvertedDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineInvertedDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

