import { APP_INITIALIZER } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { InputComponent, InputDecoratorComponent } from 'uic-design';

export default {
  title: 'Inputs/InputDecorator',
  component: InputDecoratorComponent,
  subcomponents: InputComponent,
  parameters: {
    docs: {
      description: {
        component:
          'uic-input-decorator is a wrapper for text input. It gives the possibility to prepends extra element e.g. icon, text etc. on the left side of input.',
      },
    },
  },
  argTypes: {
    decoration: {
      description: 'Slot for ornament like e.g. icon, text etc. which can be display on the left side of inpu text.',
      table: {
        category: 'Slots',
        type: {
          summary: null,
        },
      },
      control: {
        type: null,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule, InputComponent],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => {
            iconLibrary.addIcons(faSearch);
          },
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

const Template: Story = (args: Args) => ({
  props: args,
  template: `<uic-input-decorator>
    <fa-icon decoration [icon]="icon"></fa-icon>
    <input input uic-input placeholder="Book title">
  </uic-input-decorator>`,
});

export const Basic: Story = Template.bind({});

Basic.args = {
  icon: faSearch,
};
