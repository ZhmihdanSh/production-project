import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    argTypes: {}
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />;

export const LangSwitcherLight = Template.bind({});
LangSwitcherLight.args = {};

export const LangSwitcherDark = Template.bind({});
LangSwitcherDark.args = {};
LangSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
