import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
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
