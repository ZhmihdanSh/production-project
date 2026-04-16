import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ClearM: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
};

export const ClearInvertedM: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Button',
    },
};

export const ClearL: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
        size: ButtonSize.L,
    },
};

export const ClearInvertedL: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Button',
        size: ButtonSize.L,
    },
};

export const ClearXl: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
        size: ButtonSize.XL,
    },
};

export const ClearInvertedXl: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Button',
        size: ButtonSize.XL,
    },
};

export const BackgroundM: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
    },
};

export const BackgroundInvertedM: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Button',
    },
};

export const BackgroundL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
        size: ButtonSize.L,
    },
};

export const BackgroundInvertedL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Button',
        size: ButtonSize.L,
    },
};

export const BackgroundXl: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
        size: ButtonSize.XL,
    },
};

export const BackgroundInvertedXl: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Button',
        size: ButtonSize.XL,
    },
};

export const BackgroundDarkM: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const BackgroundInvertedDarkM: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const BackgroundDarkL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
        size: ButtonSize.L,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const BackgroundInvertedDarkL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Button',
        size: ButtonSize.L,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const BackgroundDarkXl: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'Button',
        size: ButtonSize.XL,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const BackgroundInvertedDarkXl: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'Button',
        size: ButtonSize.XL,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineM: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};

export const OutlineInvertedM: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: 'Button',
    },
};

export const OutlineL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
        size: ButtonSize.L,
    },
};

export const OutlineInvertedL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: 'Button',
        size: ButtonSize.L,
    },
};

export const OutlineXl: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
        size: ButtonSize.XL,
    },
};

export const OutlineInvertedXl: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: 'Button',
        size: ButtonSize.XL,
    },
};

export const ClearDarkM: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const ClearInvertedDarkM: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const ClearDarkL: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
        size: ButtonSize.L,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const ClearInvertedDarkL: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Button',
        size: ButtonSize.L,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const ClearDarkXl: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
        size: ButtonSize.XL,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const ClearInvertedDarkXl: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'Button',
        size: ButtonSize.XL,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineDarkMSquare: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: '>',
        square: true,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineInvertedDarkMSquare: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: '>',
        square: true,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineDarkLSquare: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: '>',
        size: ButtonSize.L,
        square: true,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineInvertedDarkLSquare: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: '>',
        size: ButtonSize.L,
        square: true,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineDarkXlSquare: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: '>',
        size: ButtonSize.XL,
        square: true,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineInvertedDarkXlSquare: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: '>',
        size: ButtonSize.XL,
        square: true,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineDarkM: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineInvertedDarkM: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: 'Button',
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineDarkL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
        size: ButtonSize.L,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineInvertedDarkL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: 'Button',
        size: ButtonSize.L,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineDarkXl: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
        size: ButtonSize.XL,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

export const OutlineInvertedDarkXl: Story = {
    args: {
        theme: ButtonTheme.OUTLINE_INVERTED,
        children: 'Button',
        size: ButtonSize.XL,
    },
    parameters: {
        theme: Theme.DARK,
    },
};

