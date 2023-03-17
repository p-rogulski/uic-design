import { Args, Meta, Story } from '@storybook/angular';

import { RegionComponent } from './region.component';

export default {
  title: 'Typography/region',
  component: RegionComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-region; represents a section heading.',
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
  template: '<uic-region>Product list</uic-region>',
});
