import { APP_INITIALIZER } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCog, faLocation, faPen, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { ContentListComponent, ContentListItemComponent } from './index';

export default {
  title: 'Surfaces/ContentList',
  component: ContentListComponent,
  subcomponents: ContentListItemComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-content-list | uic-content-list-item defines list with some content',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule, ContentListItemComponent, ContentListComponent],
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
    <uic-content-list>
      <uic-content-list-item><fa-icon [icon]="faCog"></fa-icon> This is cog icon</uic-content-list-item>
      <uic-content-list-item><fa-icon [icon]="faPen"></fa-icon> This is pen icon</uic-content-list-item>
      <uic-content-list-item><fa-icon [icon]="faLocation"></fa-icon> This is location icon</uic-content-list-item>
      <uic-content-list-item><fa-icon [icon]="faRocket"></fa-icon> This is rocket icon</uic-content-list-item>
    </uic-content-list>
  `,
});

export const Basic: Story = Template.bind({});
