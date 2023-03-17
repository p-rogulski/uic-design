import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { faCog, faPen, faLocation, faRocket } from '@fortawesome/free-solid-svg-icons';
import { moduleMetadata, Story, Args } from '@storybook/angular';

import { CheckboxComponent } from './index';

export default {
  title: 'Inputs/checkbox',
  component: CheckboxComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-checkbox defines custom representaion of HTML checkbox',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
} as unknown as Meta;

const Template: Story = (args: Args) => ({
  props: { ...args, faCog, faPen, faLocation, faRocket },
  template: `
    <input uic-checkbox>
  `,
});

export const Basic: Story = Template.bind({});
