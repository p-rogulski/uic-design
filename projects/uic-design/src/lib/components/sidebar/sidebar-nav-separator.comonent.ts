import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uic-sidebar-nav-separator',
  template: '',
  styleUrls: ['./sidebar-nav-separator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SidebarNavSeparatorComponent {
  @HostBinding('class') public hostClasses: Array<string> = ['uic-sidebar-nav-separator']
}
