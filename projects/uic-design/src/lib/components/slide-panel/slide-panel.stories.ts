import { APP_INITIALIZER } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { SlideComponent, SlidePanelComponent } from './index';

export default {
  title: 'Surfaces/slidePanel',
  component: SlidePanelComponent,
  subcomponents: { SlideComponent },
  parameters: {
    docs: {
      description: {
        component: 'uic-slide-panel | uic-slide-panel-item; represents a sliding section.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => {
            iconLibrary.addIcons(faCar);
          },
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
      imports: [FontAwesomeModule, SlideComponent],
    }),
  ],
} as Meta;

export const Basic: Story = (args: Args) => ({
  props: { faCar, ...args },
  template: `<uic-slide-panel>
    <uic-slide [switchIcon]="faCar" isActive="true">
      <img src="/img/lamborgini_400x200.png">
    </uic-slide>
    <uic-slide [switchIcon]="faCar">
      <img src="/img/ferrari_400x200.png">
    </uic-slide>
    <uic-slide [switchIcon]="faCar">
      <img src="/img/maserati_400x200.png">
    </uic-slide>
  </uic-slide-panel>`,
});
