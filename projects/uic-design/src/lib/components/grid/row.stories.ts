import { Args, Meta, Story } from '@storybook/angular';

import { RowComponent } from '../grid';

export default {
  title: 'Layout/Row',
  parameters: {
    docs: {
      description: {
        component: '<uic-row> component is a part of grid system. It provides wrapper for columns.',
      },
    },
  },
  component: RowComponent,
} as Meta;

const Template: Story = (args: Args) => ({
  props: args,
  template: '<uic-row>[Row]</uic-row>',
  styles: [
    `:host uic-row {
    border: 5px solid rgb(30, 167, 253);
    box-sizing: border-box;
  }`,
  ],
});

export const Basic: Story = Template.bind({});
