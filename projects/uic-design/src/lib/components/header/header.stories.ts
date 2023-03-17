import { Args, Meta, Story } from '@storybook/angular';

import { HeaderComponent } from './header.component';

export default {
  title: 'Typography/header',
  component: HeaderComponent,
  parameters: {
    docs: {
      description: {
        component:
          'h1 uic-header | h2 uic-header | h3 uic-header | h4 uic-header | h5 uic-header represents a section heading.',
      },
    },
  },
  argTypes: {
    borderBottom: {
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Represents boolean property - when is true the border-bottom is visible.',
    },
  },
} as Meta;

export const Basic: Story = (args: Args) => ({
  props: args,
  template: '<h1 uic-header>Hello World!</h1>',
});

export const h1: Story = (args: Args) => ({
  props: args,
  template: '<h1 uic-header>Hello World!</h1>',
});

export const h2: Story = (args: Args) => ({
  props: args,
  template: '<h2 uic-header>Hello World!</h2>',
});

export const h3: Story = (args: Args) => ({
  props: args,
  template: '<h3 uic-header>Hello World!</h3>',
});

export const h4: Story = (args: Args) => ({
  props: args,
  template: '<h4 uic-header>Hello World!</h4>',
});

export const h5: Story = (args: Args) => ({
  props: args,
  template: '<h5 uic-header>Hello World!</h5>',
});
