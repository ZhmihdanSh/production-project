import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {}
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;

export const MainPageLight = Template.bind({});
MainPageLight.args = {};

export const MainPageDark = Template.bind({});
MainPageDark.args = {};
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
