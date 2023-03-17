import { Args, Meta, Story } from '@storybook/angular';

import { ContainerComponent } from './container.component';

export default {
  title: 'Layout/Container',
  component: ContainerComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-container is a part of grid system. Its is a basic content wrapper',
      },
    },
  },
} as Meta;

export const Container: Story = (args: Args) => ({
  props: args,
  template: '<uic-container>[container]</uic-container>',
  styles: [
    `:host uic-container {
    border: 5px solid rgb(30, 167, 253);
    box-sizing: border-box;
  }`,
  ],
});
