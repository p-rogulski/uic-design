import { APP_INITIALIZER } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCog,
  faPen,
  faLocation,
  faRocket,
  faCake,
  faBaby,
  faDashboard,
  faBullhorn,
  faTag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Args, Meta, moduleMetadata, Story } from '@storybook/angular';

import { AvatarComponent, BoxComponent, ButtonComponent } from 'uic-design';

import { SidebarComponent } from './sidebar.component';
import { SidebarNavItemComponent } from './sidebar-nav-item.component';
import { SidebarNavComponent } from './sidebar-nav.component';
import { SidebarNavSeparatorComponent } from './sidebar-nav-separator.comonent';

export default {
  title: 'Surfaces/Sidebar',
  component: SidebarComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-sidebar reprset sidebar for menu items',
      },
    },
  },
  argTypes: {
    borderBottom: {
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Represents boolean property - when is true the border-bottom is visible.',
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule,
        ButtonComponent,
        BoxComponent,
        SidebarNavComponent,
        SidebarNavItemComponent,
        SidebarNavSeparatorComponent,
        AvatarComponent,
      ],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => {
            iconLibrary.addIcons(faCog, faPen, faLocation, faRocket, faCake, faDashboard, faBullhorn, faTag, faUser);
          },
          deps: [FaIconLibrary],
          multi: true,
        },
        provideAnimations(),
      ],
    }),
  ],
} as Meta;

const BasicTemplate: Story = (args: Args) => ({
  props: args,
  template: '<uic-sidebar [bgColor]="bgColor"></uic-sidebar>',
});

const LocationTemplate: Story = (args: Args) => ({
  props: args,
  template: '<uic-sidebar [bgColor]="bgColor" [location]="location"></uic-sidebar>',
});

const SidebarNavTemplate: Story = (args: Args) => {
  const onlyIcons: { value: boolean } = { value: true };
  const avatarSize: { value: 'small' | 'medium' } = { value: 'small' };
  const changeSidebarNavState = (isExpanded: boolean) => {
    avatarSize.value = isExpanded ? 'medium' : 'small';
    return (onlyIcons.value = !isExpanded);
  };

  const itemSelection = (selectedItem: SidebarNavItemComponent) => {
    window.alert(`Selected:${selectedItem.targetUrl}`)
  };

  return {
    props: {
      ...args,
      onlyIcons,
      faCog,
      faBaby,
      faPen,
      faLocation,
      faRocket,
      faCake,
      faDashboard,
      faBullhorn,
      faTag,
      faUser,
      avatarSize,
      changeSidebarNavState,
      itemSelection,
    },
    template: `<uic-sidebar [bgColor]="bgColor" [isExpandable] ="isExpandable" (expand)="changeSidebarNavState($event)">
    <uic-box flow="column" alingItems="center" noPadding>
      <uic-avatar [size]="avatarSize.value" imgSrc="/img/chuck_184x184.png" altText="P"></uic-avatar>
    </uic-box>
    <br>
    <uic-sidebar-nav [onlyIcons]="onlyIcons.value" (itemSelection)="itemSelection($event)">
      <uic-sidebar-nav-item [icon]="faBullhorn" [isActive]="true" targetUrl="/newsbox">Newsbox</uic-sidebar-nav-item>
      <uic-sidebar-nav-item [icon]="faTag" targetUrl="/categories">Categories</uic-sidebar-nav-item>
      <uic-sidebar-nav-item [icon]="faDashboard" targetUrl="/summary">Summary</uic-sidebar-nav-item>
      <uic-sidebar-nav-item [icon]="faUser" targetUrl="/my-account">My account</uic-sidebar-nav-item>
      <uic-sidebar-nav-item [icon]="faRocket" targetUrl="/best-idea">Best idea</uic-sidebar-nav-item>
      <uic-sidebar-nav-item [icon]="faCake" targetUrl="/creator">Creator</uic-sidebar-nav-item>
      <uic-sidebar-nav-separator></uic-sidebar-nav-separator>
      <uic-sidebar-nav-item [icon]="faLocation" targetUrl="/location">Location</uic-sidebar-nav-item>
    </uic-sidebar-nav>
  </uic-sidebar>`,
  };
};

export const Basic: Story = BasicTemplate.bind({});
export const Primary: Story = BasicTemplate.bind({});
export const PrimaryRight: Story = LocationTemplate.bind({});
export const PrimaryWithNav: Story = SidebarNavTemplate.bind({});
export const TransaparentWithNav: Story = SidebarNavTemplate.bind({});
export const TransaparentWithNavAndNoExpandable: Story = SidebarNavTemplate.bind({});

Primary.args = {
  bgColor: 'primary',
  isExpandable: true,
};

PrimaryRight.args = {
  location: 'right',
  bgColor: 'primary',
  isExpandable: true,
};

PrimaryWithNav.args = {
  bgColor: 'primary',
  isExpandable: true,
};

TransaparentWithNav.args = {
  bgColor: 'none',
  isExpandable: true,
};

TransaparentWithNavAndNoExpandable.args = {
  bgColor: 'none',
  isExpandable: false,
};
