import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { ColComponent } from './col.component';
import { RowComponent } from './row.component';

export default {
  title: 'Layout/Columns',
  component: ColComponent,
  parameters: {
    docs: {
      description: {
        component:
          'uic-col component is a part of grid system. It provides wrapper for responsive design based on breakpoint properties.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [RowComponent],
    }),
  ],
} as Meta;

const styles: string[] = [
  `:host uic-col {
  border: 5px solid rgb(30, 167, 253);
  box-sizing: border-box;
}`,
];

const Template: Story = (args: Args) => ({
  props: args,
  template: '<uic-col>[col]</uic-col>',
  styles,
});

export const Basic: Story = Template.bind({});

export const Breakpoints: Story = (args: Args) => ({
  props: args,
  template: `
  <uic-row>
    <uic-col [md]="1" [sm]="5" [xs]="12">[md-1] [sm-12] [xs-12]</uic-col>
    <uic-col [md]="3" [sm]="5" [xs]="12">[md-3] [sm-12] [xs-12]</uic-col>
    <uic-col [md]="6" [sm]="1" [xs]="12">[md-6] [sm-12] [xs-12]</uic-col>
    <uic-col [md]="2" [sm]="1" [xs]="12">[md-2] [sm-12] [xs-12]</uic-col>
  </uic-row>`,
  styles,
});
