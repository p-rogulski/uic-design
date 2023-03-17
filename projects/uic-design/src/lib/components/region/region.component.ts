import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'uic-region',
  template: '<ng-content></ng-content>',
  styleUrls: ['./region.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RegionComponent {
  @Input() public borderBottom = false;

  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-region'];
}
