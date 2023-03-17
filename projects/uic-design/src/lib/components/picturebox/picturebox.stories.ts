import { Args, Meta, Story } from '@storybook/angular';

import { PictureboxComponent } from './picturebox.component';

export default {
  title: 'dataContent/Picturebox',
  component: PictureboxComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-picturebox defines content with picture.',
      },
    },
  },
} as Meta;

const Template: Story = (args: Args) => ({
  props: args,
  template: '<uic-picturebox [imgSrc]="imgSrc" [size]="size"></uic-picturebox>',
});

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
  imgSrc: '/img/bruce_lee_736x568.png',
  size: 'small',
};

ImgMedium.args = {
  imgSrc: '/img/bruce_lee_736x568.png',
  size: 'medium',
};

ImgLarge.args = {
  imgSrc: '/img/bruce_lee_736x568.png',
  size: 'large',
};
