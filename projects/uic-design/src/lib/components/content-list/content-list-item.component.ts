import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uic-content-list-item',
  template: '<ng-content></ng-content>',
  styleUrls: ['./content-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ContentListItemComponent {
  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-content-list-item'];
}
