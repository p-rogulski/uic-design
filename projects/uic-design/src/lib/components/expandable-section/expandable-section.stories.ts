import { provideAnimations } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { AvatarComponent, BoxComponent, ButtonComponent, HeaderComponent } from 'uic-design';

import { ExpandableSectionComponent } from './expandable-section.component';

export default {
  title: 'Surfaces/ExpandableSection',
  component: ExpandableSectionComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-expandable-section defines container with dropdown content.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule,
        AvatarComponent,
        ButtonComponent,
        ExpandableSectionComponent,
        BoxComponent,
        HeaderComponent,
      ],
      providers: [provideAnimations()],
    }),
  ],
} as Meta;

const Template: Story = (args: Args) => ({
  props: args,
  styles: [
    `.uic-box {
      padding:0!important;
    }

    .uic-expandable-section {
      margin-bottom: 20px;
    }
    `,
  ],
  template: `<uic-expandable-section toggleButtonLabel="Show more">
    <ng-container headerContent>
      <h3 uic-header>Chuck Norris</h3>
    </ng-container>
  <ng-container dropdownContent>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis dolor aliquet, commodo nunc vel, malesuada felis. Aliquam at consectetur dui, et consectetur magna. Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
    Morbi semper sollicitudin sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tempor lorem sed risus luctus efficitur eu id ex. Pellentesque ultricies mi a felis molestie feugiat ut et orci. Proin imperdiet lacus ut egestas pulvinar. Duis eu ullamcorper nunc, nec scelerisque eros. Pellentesque gravida efficitur arcu, a rutrum arcu facilisis ac.
    Sed et purus porttitor, porttitor justo scelerisque, euismod dolor. Duis urna sem, aliquam ac est id, feugiat hendrerit lacus.
    Donec gravida lorem quis tortor lacinia, id elementum magna porttitor. Aenean consectetur quam ut orci venenatis dignissim.
    Vivamus ultricies aliquam fringilla.
  </ng-container>
  </uic-expandable-section>
  <uic-expandable-section toggleButtonLabel="Show more">
    <ng-container headerContent>
      <h3 uic-header>Bruce Lee</h3>
    </ng-container>
  <ng-container dropdownContent>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis dolor aliquet, commodo nunc vel, malesuada felis. Aliquam at consectetur dui, et consectetur magna. Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
    Morbi semper sollicitudin sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tempor lorem sed risus luctus efficitur eu id ex. Pellentesque ultricies mi a felis molestie feugiat ut et orci. Proin imperdiet lacus ut egestas pulvinar. Duis eu ullamcorper nunc, nec scelerisque eros. Pellentesque gravida efficitur arcu, a rutrum arcu facilisis ac.
    Sed et purus porttitor, porttitor justo scelerisque, euismod dolor. Duis urna sem, aliquam ac est id, feugiat hendrerit lacus.
    Donec gravida lorem quis tortor lacinia, id elementum magna porttitor. Aenean consectetur quam ut orci venenatis dignissim.
    Vivamus ultricies aliquam fringilla.
  </ng-container>
  </uic-expandable-section>
  `,
});

export const Basic: Story = Template.bind({});
