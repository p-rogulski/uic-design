import { Args, Story } from '@storybook/angular';

import { ButtonComponent } from './button.component';

export default {
  title: 'Inputs/Button',
  component: ButtonComponent,
  parameters: {
    docs: {
      description: {
        component:
          'uic-button | uic-button-outline | uic-button-link | uic-button-text  | uic-button-circle  | uic-button-icon provides custom implementation of HTML button.',
      },
    },
  },
};

const Template: Story = (args: Args) => ({
  props: args,
  template: '<button uic-button [color]="color" [size]="size">Button</button>',
});

export const Basic: Story = Template.bind({});

export const Primary: Story = Template.bind({});
Primary.args = { color: 'primary' };

export const Secondary: Story = Template.bind({});
Secondary.args = { color: 'secondary' };

export const Success: Story = Template.bind({});
Success.args = {
  color: 'success',
};

export const Danger: Story = Template.bind({});
Danger.args = {
  color: 'danger',
};

export const Upload: Story = Template.bind({});
Upload.args = {
  color: 'upload',
};

export const Small: Story = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large: Story = Template.bind({});
Large.args = {
  color: 'primary',
  size: 'large',
};

export const Outline: Story = (args: Args) => ({
  props: args,
  template: '<button uic-button-outline [color]="color" [size]="size">Outline</button>',
});

export const Link: Story = (args: Args) => ({
  props: args,
  template: '<button uic-button-link [color]="color" [size]="size">Link</button>',
});

export const Text: Story = (args: Args) => ({
  props: args,
  template: '<button uic-button-text [color]="color" [size]="size">Text</button>',
});

export const Icon: Story = (args: Args) => ({
  props: args,
  template: '<button uic-button-icon>🎁</button>',
});
