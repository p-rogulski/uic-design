import { Args, Meta, Story } from '@storybook/angular';

import { InfoboxComponent } from './infobox.component';

export default {
  title: 'Surfaces/Infobox',
  component: InfoboxComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-infobox is a custom container for news content.',
      },
    },
  },
} as Meta;

const Template: Story = (args: Args) => ({
  props: args,
  template: `
    <uic-infobox title="Lorem ipsum 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis dolor aliquet, commodo nunc vel, malesuada felis. Aliquam at consectetur dui, et consectetur magna. Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tempor lorem sed risus luctus efficitur eu id ex. Pellentesque ultricies mi a felis molestie feugiat ut et orci. Proin imperdiet lacus ut egestas pulvinar. Duis eu ullamcorper nunc, nec scelerisque eros. Pellentesque gravida efficitur arcu, a rutrum arcu facilisis ac.
        Sed et purus porttitor, porttitor justo scelerisque, euismod dolor. Duis urna sem, aliquam ac est id, feugiat hendrerit lacus.
        Donec gravida lorem quis tortor lacinia, id elementum magna porttitor. Aenean consectetur quam ut orci venenatis dignissim.
        Vivamus ultricies aliquam fringilla.
    </uic-infobox>
     <uic-infobox title="Lorem ipsum 2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis dolor aliquet, commodo nunc vel, malesuada felis. Aliquam at consectetur dui, et consectetur magna. Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tempor lorem sed risus luctus efficitur eu id ex. Pellentesque ultricies mi a felis molestie feugiat ut et orci. Proin imperdiet lacus ut egestas pulvinar. Duis eu ullamcorper nunc, nec scelerisque eros. Pellentesque gravida efficitur arcu, a rutrum arcu facilisis ac.
        Sed et purus porttitor, porttitor justo scelerisque, euismod dolor. Duis urna sem, aliquam ac est id, feugiat hendrerit lacus.
        Donec gravida lorem quis tortor lacinia, id elementum magna porttitor. Aenean consectetur quam ut orci venenatis dignissim.
        Vivamus ultricies aliquam fringilla.
    </uic-infobox>
    <uic-infobox title="Lorem ipsum 3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis dolor aliquet, commodo nunc vel, malesuada felis. Aliquam at consectetur dui, et consectetur magna. Donec fermentum tempus elit ut gravida. Aenean id ullamcorper mi, vel rutrum eros.
        Morbi semper sollicitudin sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tempor lorem sed risus luctus efficitur eu id ex. Pellentesque ultricies mi a felis molestie feugiat ut et orci. Proin imperdiet lacus ut egestas pulvinar. Duis eu ullamcorper nunc, nec scelerisque eros. Pellentesque gravida efficitur arcu, a rutrum arcu facilisis ac.
        Sed et purus porttitor, porttitor justo scelerisque, euismod dolor. Duis urna sem, aliquam ac est id, feugiat hendrerit lacus.
        Donec gravida lorem quis tortor lacinia, id elementum magna porttitor. Aenean consectetur quam ut orci venenatis dignissim.
        Vivamus ultricies aliquam fringilla.
    </uic-infobox>
  `,
});

export const Basic: Story = Template.bind({});
