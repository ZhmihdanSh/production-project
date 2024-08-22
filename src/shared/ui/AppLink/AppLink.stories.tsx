import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: { to: RoutePaths.main }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const AppLinkPrimaryLight = Template.bind({});
AppLinkPrimaryLight.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
};

export const AppLinkPrimaryDark = Template.bind({});
AppLinkPrimaryDark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
};
AppLinkPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AppLinkInvertedLight = Template.bind({});
AppLinkInvertedLight.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED
};

export const AppLinkInvertedDark = Template.bind({});
AppLinkInvertedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED
};
AppLinkInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
