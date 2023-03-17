import { Args, Meta, Story } from '@storybook/angular';

import { ProgressBarComponent } from './progress-bar.component';

export default {
  title: 'progress/progressBar',
  component: ProgressBarComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-progress-bar represents custom implementation of HTML5 input type progress.',
      },
    },
  },
} as Meta;

export const Basic: Story = (args: Args) => ({
  template: '<uic-progress-bar value={{62}}></uic-progress-bar>',
});


const ProgressBarBgColorWithLabelTemplate: Story = (args: Args) => ({
  props: args,
  template: '<uic-progress-bar [label]="label" [value]="value" [bgColor]="bgColor"></uic-progress-bar>',
});

export const ProgressBarBackgroundColorSecondaryWithLabel: Story = ProgressBarBgColorWithLabelTemplate.bind({});
ProgressBarBackgroundColorSecondaryWithLabel.args = {
  bgColor: 'secondary',
  value: 70,
  label: 'Progress 1'
};

export const ProgressBarBackgroundColorGrey100WithLabel: Story = ProgressBarBgColorWithLabelTemplate.bind({});
ProgressBarBackgroundColorGrey100WithLabel.args = {
  bgColor: 'grey-100',
  value: 50,
  label: 'Progress 2'
};

export const ProgressBarBackgroundColorDangerWithLabel: Story = ProgressBarBgColorWithLabelTemplate.bind({});
ProgressBarBackgroundColorDangerWithLabel.args = {
  bgColor: 'danger',
  value: 80,
  label: 'Progress 3'
};

