import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ErrorPage from './ErrorPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'pages/ErrorPage',
    component: ErrorPage,
    argTypes: {}
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = () => <ErrorPage />;

export const ErrorPageLight = Template.bind({});
ErrorPageLight.args = {};

export const ErrorPageDark = Template.bind({});
ErrorPageDark.args = {};
ErrorPageDark.decorators = [ThemeDecorator(Theme.DARK)];
