import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
    args: {
        children: 'Text'
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClearLight = Template.bind({});
ClearLight.args = {
    theme: ButtonTheme.CLEAR
};

export const ClearSizeL = Template.bind({});
ClearSizeL.args = {
    size: ButtonSize.L,
    theme: ButtonTheme.CLEAR
};

export const ClearSizeXL = Template.bind({});
ClearSizeXL.args = {
    size: ButtonSize.XL,
    theme: ButtonTheme.CLEAR
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    theme: ButtonTheme.CLEAR
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInvertedLight = Template.bind({});
ClearInvertedLight.args = {
    theme: ButtonTheme.CLEAR_INVERTED
};

export const ClearInvertedDark = Template.bind({});
ClearInvertedDark.args = {
    theme: ButtonTheme.CLEAR_INVERTED
};
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    theme: ButtonTheme.OUTLINE
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    size: ButtonSize.L,
    theme: ButtonTheme.OUTLINE
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    size: ButtonSize.XL,
    theme: ButtonTheme.OUTLINE
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineInvertedLight = Template.bind({});
OutlineInvertedLight.args = {
    theme: ButtonTheme.OUTLINE_INVERTED
};

export const OutlineInvertedDark = Template.bind({});
OutlineInvertedDark.args = {
    theme: ButtonTheme.OUTLINE_INVERTED
};
OutlineInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundLight = Template.bind({});
BackgroundLight.args = {
    theme: ButtonTheme.BACKGROUND
};

export const BackgroundSizeL = Template.bind({});
BackgroundSizeL.args = {
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND
};

export const BackgroundSizeXL = Template.bind({});
BackgroundSizeXL.args = {
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    theme: ButtonTheme.BACKGROUND
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedLight = Template.bind({});
BackgroundInvertedLight.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareMLight = Template.bind({});
SquareMLight.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
    children: 'X',
    square: true
};

export const SquareMDark= Template.bind({});
SquareMDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
    children: 'X',
    square: true
};
SquareMDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareLLight = Template.bind({});
SquareLLight.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    children: 'X',
    square: true
};

export const SquareLDark = Template.bind({});
SquareLDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    children: 'X',
    square: true
};
SquareLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareXLLight = Template.bind({});
SquareXLLight.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    children: 'X',
    square: true
};

export const SquareXLDark= Template.bind({});
SquareXLDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    children: 'X',
    square: true
};
SquareXLDark.decorators = [ThemeDecorator(Theme.DARK)];
