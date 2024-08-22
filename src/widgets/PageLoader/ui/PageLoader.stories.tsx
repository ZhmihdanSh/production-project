import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageLoader } from './PageLoader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'widgets/PageLoader',
    component: PageLoader,
    argTypes: {}
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const PageLoaderLight = Template.bind({});
PageLoaderLight.args = {};

export const PageLoaderDark = Template.bind({});
PageLoaderDark.args = {};
PageLoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
