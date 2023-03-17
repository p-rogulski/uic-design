import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uic-content-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./content-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ContentListComponent {
  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-content-list'];
}
