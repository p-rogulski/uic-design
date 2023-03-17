import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uic-header-group',
  template: '<ng-content></ng-content>',
  styleUrls: ['./header-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderGroupComponent {
  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-header-group'];
}
