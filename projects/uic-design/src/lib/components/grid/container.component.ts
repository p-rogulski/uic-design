import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uic-container',
  template: '<ng-content></ng-content>',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ContainerComponent {
  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-container'];
}
