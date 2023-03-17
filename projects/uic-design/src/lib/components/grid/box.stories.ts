import { Meta, Story } from '@storybook/angular';

import { BoxComponent } from './box.component';

export default {
  title: 'Layout/Box',
  component: BoxComponent,
  parameters: {
    docs: {
      description: {
        component:
          'uic-box component is a part of grid system. It provides wrapper for responsive design based on flex properties.',
      },
    },
  },
  argTypes: {
    flow: {
      options: ['row', 'column', 'wrap'],
      control: { type: 'radio' },
    },
    alignItems: {
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
      control: { type: 'radio' },
    },
    justifyContent: {
      options: ['start', 'end', 'center', 'space-between', 'space-around', 'space-evenly'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `<uic-box [flow]="flow" [alingItems]="alingItems" [justifyContent]="justifyContent">
  <div>[item1]</div>
  <div>[item2]</div>
  <div>[item3]</div>
  </uic-box>`,
});

const NoPaddingTemplate: Story = () => ({
  styles: ['uic-box { border: 1px #000 solid}'],
  template: `<uic-box noPadding>
  <div>[item1]</div>
  <div>[item2]</div>
  <div>[item3]</div>
  </uic-box>`,
});

export const Basic: Story = Template.bind({});

export const NoPadding: Story = NoPaddingTemplate.bind({});

export const Column: Story = Template.bind({});
Column.args = { flow: 'column' };

export const Row: Story = Template.bind({});
Row.args = { flow: 'row' };

export const Wrap: Story = Template.bind({});
Wrap.args = { flow: 'wrap' };

export const AlingStart: Story = Template.bind({});
AlingStart.args = { alingItems: 'start' };

export const AlingEnd: Story = Template.bind({});
AlingEnd.args = { alingItems: 'end' };

export const AlingCenter: Story = Template.bind({});
AlingCenter.args = { alingItems: 'center' };

export const AlingStretch: Story = Template.bind({});
AlingCenter.args = { alingItems: 'stretch' };

export const AlingBaseline: Story = Template.bind({});
AlingCenter.args = { alingItems: 'baseline' };

export const JustifyStart: Story = Template.bind({});
JustifyStart.args = { justifyContent: 'start' };

export const JustifyEnd: Story = Template.bind({});
JustifyEnd.args = { justifyContent: 'end' };

export const JustifyCenter: Story = Template.bind({});
JustifyCenter.args = { justifyContent: 'center' };

export const JustifySpaceBetween: Story = Template.bind({});
JustifySpaceBetween.args = { justifyContent: 'space-between' };

export const JustifySpaceAround: Story = Template.bind({});
JustifySpaceAround.args = { justifyContent: 'space-around' };

export const JustifySpaceEvenly: Story = Template.bind({});
JustifySpaceEvenly.args = { justifyContent: 'space-evenly' };
