import { APP_INITIALIZER } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCog, faLocation, faPen, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Meta, Story, moduleMetadata } from '@storybook/angular';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbsComponent } from './breadcrumbs.component';

export default {
  title: 'Navigation/Breadcrumbs',
  component: BreadcrumbsComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-breadcrumbs | uic-breadcrumb defines vertical navigation.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule, BreadcrumbComponent],
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

const BasicTemplate: Story = () => ({
  template: `<uic-breadcrumbs>
      <uic-breadcrumb [isActive]="true" title="Mode1"></uic-breadcrumb>
      <uic-breadcrumb title="Mode 2"></uic-breadcrumb>
      <uic-breadcrumb title="Mode 3"></uic-breadcrumb>
      <uic-breadcrumb title="Mode 4"></uic-breadcrumb>
  </uic-breadcrumbs>`,
});

export const Basic: Story = BasicTemplate.bind({});
