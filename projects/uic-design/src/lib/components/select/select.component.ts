import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'select[uic-select]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SelectComponent {}

