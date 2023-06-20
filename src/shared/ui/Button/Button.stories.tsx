import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ButtonTheme, Button, ButtonSize } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SquareSizeS = Template.bind({});
SquareSizeS.args = {
  children: '<>',
  square: true,
  size: ButtonSize.S,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
  children: '<>',
  square: true,
  size: ButtonSize.M,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: '<>',
  square: true,
  size: ButtonSize.L,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
  children: '<>',
  square: true,
  size: ButtonSize.XL,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Text',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeS = Template.bind({});
OutlineSizeS.args = {
  children: 'Text',
  size: ButtonSize.S,
  theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: 'Text',
  size: ButtonSize.L,
  theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
  children: 'Text',
  size: ButtonSize.XL,
  theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
