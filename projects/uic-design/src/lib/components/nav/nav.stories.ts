import { APP_INITIALIZER } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCog, faLocation, faPen, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { colorOptions, directionOptions } from 'mock/data';
import { NavComponent, NavItemComponent } from 'uic-design';

export default {
  title: 'Navigation/Nav',
  component: NavComponent,
  subcomponents: NavItemComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-nav | uic-nav-item defines vertical or horizotal menu.',
      },
    },
  },
  argTypes: {
    direction: {
      options: directionOptions,
      control: { type: 'radio' },
    },
    textColor: {
      options: colorOptions,
      control: { type: 'radio' },
    },
    markerColor: {
      options: colorOptions,
      control: { type: 'radio' },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule, NavItemComponent],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => {
            iconLibrary.addIcons(faCog, faPen, faLocation, faRocket);
          },
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

const Template: Story = (args: Args) => ({
  props: { ...args, faCog, faPen, faLocation, faRocket },
  styles: [
    `
    fa-icon {
      margin-right:10px;
    }
  `,
  ],
  template: `
    <uic-nav [direction]="direction" [textColor]="textColor" [markerColor]="markerColor">
        <uic-nav-item isActive="true" [icon]="faCog" title="Cog"></uic-nav-item>
        <uic-nav-item [icon]="faPen" title="Pen"></uic-nav-item>
        <uic-nav-item [icon]="faLocation" title="Location"></uic-nav-item>
        <uic-nav-item [icon]="faRocket" title="Rocket"></uic-nav-item>
    </uic-nav>
  `,
});

export const Basic: Story = Template.bind({});
export const Vertical: Story = Template.bind({});
export const TextColor: Story = Template.bind({});
export const MarkerColor: Story = Template.bind({});

Vertical.args = {
  direction: 'vertical',
};

TextColor.args = {
  textColor: 'secondary',
};

MarkerColor.args = {
  markerColor: 'secondary',
};
