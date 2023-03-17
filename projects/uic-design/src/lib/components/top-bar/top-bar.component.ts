import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

type TopBarColor = 'primary' | 'secondary' | 'grey-200';
type TopBarPosition = 'fixed' | 'sticky';

@Component({
  selector: 'uic-top-bar',
  template: '<ng-content></ng-content>',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TopBarComponent {
  @Input() color: TopBarColor;
  @Input() position: TopBarPosition;

  @HostBinding('class') get hostClasses(): Array<string> {
    const hostClasses: Array<string> = ['uic-top-bar'];

    if (this.color) {
      hostClasses.push(`uic-top-bar-${this.color}`);
    }

    if (this.position) {
      hostClasses.push(`uic-top-bar-${this.position}`);
    }

    return hostClasses;
  }
}
