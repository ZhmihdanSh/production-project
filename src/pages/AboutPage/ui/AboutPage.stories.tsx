import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutPage from './AboutPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {}
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];
