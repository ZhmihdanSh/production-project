import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorScreen } from './ErrorScreen';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'widgets/ErrorScreen',
    component: ErrorScreen,
    argTypes: {}
} as ComponentMeta<typeof ErrorScreen>;

const Template: ComponentStory<typeof ErrorScreen> = (args) => <ErrorScreen {...args} />;

export const ErrorScreenLight = Template.bind({});
ErrorScreenLight.args = {};

export const ErrorScreenDark = Template.bind({});
ErrorScreenDark.args = {};
ErrorScreenDark.decorators = [ThemeDecorator(Theme.DARK)];
