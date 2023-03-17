import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uic-input-label',
  template: '<ng-content></ng-content>',
  styleUrls: ['./input-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class InputLabelComponent {
  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-input-label'];
}
