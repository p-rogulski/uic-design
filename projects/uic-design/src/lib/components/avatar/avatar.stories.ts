import { Args, Meta, Story } from '@storybook/angular';

import { colorOptions } from 'mock/data';

import { AvatarComponent } from './avatar.component';

export default {
  title: 'dataContent/Avatar',
  component: AvatarComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-avatar defines content with picture.',
      },
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      defaultValue: 'medium',
    },
    bgColor: {
      options: colorOptions,
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    altTextColor: {
      options: colorOptions,
      control: { type: 'radio' },
      defaultValue: 'light',
    },
  },
} as Meta;

const Template: Story = (args: Args) => ({
  props: { ...args },
  template:
    '<uic-avatar [size]="size" [imgSrc]="imgSrc" [bgColor]="bgColor" [altTextColor]="altTextColor" altText="P"></uic-avatar>',
});

export const Default: Story = Template.bind({});
export const SizeSmall: Story = Template.bind({});
export const SizeMedium: Story = Template.bind({});
export const SizeLarge: Story = Template.bind({});
export const ImgSmall: Story = Template.bind({});
export const ImgMedium: Story = Template.bind({});
export const ImgLarge: Story = Template.bind({});

SizeSmall.args = {
  size: 'small',
};

SizeMedium.args = {
  size: 'medium',
};

SizeLarge.args = {
  size: 'large',
};

ImgSmall.args = {
  imgSrc: '/img/chuck_184x184.png',
  size: 'small',
};

ImgMedium.args = {
  imgSrc: '/img/chuck_184x184.png',
  size: 'medium',
};

ImgLarge.args = {
  imgSrc: '/img/chuck_184x184.png',
  size: 'large',
};
