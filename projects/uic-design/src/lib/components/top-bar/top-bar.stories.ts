import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { BoxComponent, TopBarComponent } from 'uic-design';

export default {
  title: 'Surfaces/TopBar',
  component: TopBarComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-top-bar Reprsets top bar for menu items',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [BoxComponent],
    }),
  ],
} as Meta;

const TemplateColor: Story = (args: Args) => ({
  props: args,
  template: `
    <uic-top-bar [color]="color">[BRAND]</uic-top-bar>
  `,
});

const TemplatePosition: Story = (args: Args) => ({
  props: args,
  template: `
    <uic-top-bar color="primary" [position]="position">[BRAND]</uic-top-bar>
    <uic-box flow="column">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>
    </uic-box>
  `,
});

export const Basic: Story = TemplateColor.bind({});
export const Primary: Story = TemplateColor.bind({});
export const Secondary: Story = TemplateColor.bind({});
export const Smoke: Story = TemplateColor.bind({});
export const Fixed: Story = TemplatePosition.bind({});
export const Sticky: Story = TemplatePosition.bind({});

Primary.args = {
  color: 'primary',
};

Secondary.args = {
  color: 'secondary',
};

Smoke.args = {
  color: 'smoke',
};

Fixed.args = {
  position: 'fixed',
};

Sticky.args = {
  position: 'sticky',
};
