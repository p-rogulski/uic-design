import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { InputComponent, InputLabelComponent } from 'uic-design';

export default {
  title: 'Inputs/InputLabel',
  component: InputLabelComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-input-label is a custom variant of standard label.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [InputComponent],
    }),
  ],
} as Meta;

const Template: Story = (args: Args) => ({
  props: args,
  template: `
    <uic-input-label>Login</uic-input-label>
    <input uic-input>
  `,
});

export const Basic: Story = Template.bind({});
