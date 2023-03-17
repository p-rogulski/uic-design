import { Args, Meta, Story } from '@storybook/angular';

import { InputComponent } from './input.component';

export default {
  title: 'Inputs/Input',
  component: InputComponent,
  parameters: {
    docs: {
      description: {
        component: 'input uic-input it is a custom implementation of HTML input.',
      },
    },
  },
} as Meta;

const Template: Story = (args: Args) => ({
  props: args,
  template: '<input uic-input>',
});

export const Basic: Story = Template.bind({});
