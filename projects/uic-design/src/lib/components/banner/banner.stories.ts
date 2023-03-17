import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { BannerComponent } from './banner.component';

export default {
  title: 'Notifications/Banner',
  component: BannerComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-banner provides static content in 4 varinats: info, success, warning, error',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
  ],
} as Meta;

export const Info: Story = (args: Args) => ({
  props: args,
  template:
    '<uic-banner info title=\'Banner info\' description=\'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus sapien sed vehicula feugiat. Ut lacinia velit sit amet libero pharetra pharetra. Morbi at justo urna. Phasellus eget mauris est. Donec pharetra varius dictum. Suspendisse rhoncus et felis eu pulvinar. Maecenas interdum sagittis gravida. Aliquam quis ligula elit. Nullam ornare, est ut bibendum elementum, mi nibh mattis elit, a pulvinar felis diam vitae eros. Quisque ac egestas eros. Maecenas tempus, tortor at cursus ornare, est metus sodales lectus, in dapibus est massa vestibulum enim. Integer congue finibus cursus.\'></uic-banner>',
});

export const Success: Story = (args: Args) => ({
  props: args,
  template:
    '<uic-banner success title=\'Banner success\' description=\'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus sapien sed vehicula feugiat. Ut lacinia velit sit amet libero pharetra pharetra. Morbi at justo urna. Phasellus eget mauris est. Donec pharetra varius dictum. Suspendisse rhoncus et felis eu pulvinar. Maecenas interdum sagittis gravida. Aliquam quis ligula elit. Nullam ornare, est ut bibendum elementum, mi nibh mattis elit, a pulvinar felis diam vitae eros. Quisque ac egestas eros. Maecenas tempus, tortor at cursus ornare, est metus sodales lectus, in dapibus est massa vestibulum enim. Integer congue finibus cursus.\'></uic-banner>',
});

export const Warning: Story = (args: Args) => ({
  props: args,
  template:
    '<uic-banner warning title=\'Banner warning\' description=\'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus sapien sed vehicula feugiat. Ut lacinia velit sit amet libero pharetra pharetra. Morbi at justo urna. Phasellus eget mauris est. Donec pharetra varius dictum. Suspendisse rhoncus et felis eu pulvinar. Maecenas interdum sagittis gravida. Aliquam quis ligula elit. Nullam ornare, est ut bibendum elementum, mi nibh mattis elit, a pulvinar felis diam vitae eros. Quisque ac egestas eros. Maecenas tempus, tortor at cursus ornare, est metus sodales lectus, in dapibus est massa vestibulum enim. Integer congue finibus cursus.\'></uic-banner>',
});

export const Error: Story = (args: Args) => ({
  props: args,
  template:
    '<uic-banner error title=\'Banner error\' description=\'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus sapien sed vehicula feugiat. Ut lacinia velit sit amet libero pharetra pharetra. Morbi at justo urna. Phasellus eget mauris est. Donec pharetra varius dictum. Suspendisse rhoncus et felis eu pulvinar. Maecenas interdum sagittis gravida. Aliquam quis ligula elit. Nullam ornare, est ut bibendum elementum, mi nibh mattis elit, a pulvinar felis diam vitae eros. Quisque ac egestas eros. Maecenas tempus, tortor at cursus ornare, est metus sodales lectus, in dapibus est massa vestibulum enim. Integer congue finibus cursus.\'></uic-banner>',
});
