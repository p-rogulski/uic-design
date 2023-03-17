import { APP_INITIALIZER } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngry, faBarChart, faBell, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { colorOptions, iconSizeOptions } from 'mock/data';

import { BoxComponent } from '../grid';

import { CardComponent } from './card.component';

export default {
  title: 'Surfaces/Card',
  component: CardComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-card represents icon with text container.',
      },
    },
  },
  argTypes: {
    bgColor: {
      options: colorOptions,
      control: { type: 'radio' },
    },
    textColor: {
      options: colorOptions,
      control: { type: 'radio' },
    },
    iconSize: {
      options: iconSizeOptions,
      control: { type: 'radio' },
    },
    title: {
      options: colorOptions,
      control: { type: 'input' },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule, BoxComponent],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => {
            iconLibrary.addIcons(faPenToSquare);
          },
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

const Template: Story = (args: Args) => ({
  props: { ...args, faPenToSquare, faAngry, faBarChart, faBell },
  template: `
  <uic-box flow="wrap" justifyContent="space-around" alingItems="baseline">
    <uic-card title="faPenToSquare" [icon]="faPenToSquare" [bgColor]="bgColor" [textColor]="textColor">
      <uic-box flow="column">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
          Aliquam at consectetur dui, et consectetur magna.
          Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
          Morbi semper sollicitudin sapien.
        </p>
      </uic-box>
    </uic-card>

  <uic-card title="faAngry" [icon]="faAngry" [bgColor]="bgColor" [textColor]="textColor">
    <uic-box flow="column">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>
    </uic-box>
  </uic-card>

  <uic-card title="faBarChart" [icon]="faBarChart" [bgColor]="bgColor" [textColor]="textColor">
    <uic-box flow="column">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>
    </uic-box>
  </uic-card>

  <uic-card title="faBell" [icon]="faBell" [bgColor]="bgColor" [textColor]="textColor">
    <uic-box flow="column">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Cras quis dolor aliquet, commodo nunc vel, malesuada felis.
        Aliquam at consectetur dui, et consectetur magna.
        Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien.
      </p>
    </uic-box>
  </uic-card>
</uic-box>
  `,
});

export const Basic: Story = Template.bind({});
export const WithColors: Story = Template.bind({});

WithColors.args = {
  bgColor: 'primary',
  textColor: 'light',
};
