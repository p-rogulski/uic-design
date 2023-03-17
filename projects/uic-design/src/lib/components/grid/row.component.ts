import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uic-row',
  template: '<ng-content></ng-content>',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RowComponent {
  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-row'];
}
