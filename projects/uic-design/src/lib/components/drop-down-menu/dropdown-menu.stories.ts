import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCog, faDoorOpen, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { AvatarComponent, ButtonComponent, DropdownMenuRefDirective } from 'uic-design';

import { DropdownMenuComponent, MenuItemComponent } from './index';

export default {
  title: 'Navigation/dropdownMenu',
  component: DropdownMenuComponent,
  subcomponents: MenuItemComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-menu | uic-menu-item defines menu structure.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        FontAwesomeModule,
        AvatarComponent,
        DropdownMenuComponent,
        MenuItemComponent,
        ButtonComponent,
        DropdownMenuRefDirective,
      ],
    }),
  ],
} as Meta;

const styles = [
  `fa-icon {
      margin-right: 12px;
    }`,
];

const MenuButtonTemplate: Story = (args: Args) => {
  const itemClick = (event: Event) => window.alert(`Hello from ${(event.target as HTMLElement).textContent}`);

  return {
    props: { ...args, itemClick },
    styles,
    template: `<div class="menu-group">
      <button uic-button colo="primary" [uicDropdownMenuRef]="menuButton">Main menu</button>
      <uic-menu label="Main menu" #menuButton>
          <uic-menu-item (click)="itemClick($event)">Add user group</uic-menu-item>
          <uic-menu-item (click)="itemClick($event)">Modify existing item</uic-menu-item>
          <uic-menu-item (click)="itemClick($event)">Define new system requirements</uic-menu-item>
      </uic-menu>
    <div>`,
  };
};

const MenuAvatarTemplate: Story = (args: Args) => {
  const itemClick = (event: Event) => window.alert(`Hello from ${(event.target as HTMLElement).textContent}`);

  return {
    props: { ...args, faCog, faDoorOpen, faRocket, itemClick },
    styles,
    template: `<div class="menu-group">
      <uic-avatar imgSrc="/img/chuck_184x184.png" [uicDropdownMenuRef]="avatarMenu"></uic-avatar>
      <uic-menu label="Main menu" #avatarMenu>
        <uic-menu-item (click)="itemClick($event)"><fa-icon [icon]="faCog"></fa-icon><span>Account Settings</span></uic-menu-item>
        <uic-menu-item withSeparator (click)="itemClick($event)"><fa-icon [icon]="faRocket"></fa-icon><span>Profile evolution</span></uic-menu-item>
        <uic-menu-item (click)="itemClick($event)"><fa-icon [icon]="faDoorOpen"></fa-icon><span>Logout</span></uic-menu-item>
      </uic-menu>
    <div>`,
  };
};

export const MenuButton: Story = MenuButtonTemplate.bind({});
export const MenuAvatar: Story = MenuAvatarTemplate.bind({});
