import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { HeaderComponent, HeaderGroupComponent } from 'uic-design';

export default {
  title: 'Typography/header-group',
  component: HeaderGroupComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-header-group provides wrapper for <h-* uic-header> elements.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [HeaderComponent],
    }),
  ],
} as Meta;

export const Basic: Story = (args: Args) => ({
  props: args,
  template: `<uic-header-group>
    <h2 uic-header borderBottom="true">Title level</h2>
    <h4 uic-header>Subtitle level</h4>
  </uic-header-group>`,
});
