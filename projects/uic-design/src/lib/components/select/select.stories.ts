import { Args, Meta, Story } from '@storybook/angular';

import { SelectComponent } from './select.component';

export default {
  title: 'Inputs/Select',
  component: SelectComponent,
  parameters: {
    docs: {
      description: {
        component: 'select uic-select; it is a custom implementation of HTML select.',
      },
    },
  },
} as Meta;

const Template: Story = (args: Args) => ({
  props: args,
  template: `<select uic-select name="cars">
    <option value="audi"selected>Audi</option>
    <option value="bmw">BMW</option>
    <option value="mazda">Mada</option>
    <option value="opel">Opel</option>
  </select>`,
});

export const Basic: Story = Template.bind({});

