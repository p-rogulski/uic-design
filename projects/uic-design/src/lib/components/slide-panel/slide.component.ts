import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'uic-slide',
  template: '<ng-content></ng-content> ',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SlideComponent {
  @Input() public isActive = false;
  @Input() public switchIcon: IconDefinition;

  @HostBinding('class') get hostClass(): Array<string> {
    const hostClassess: Array<string> = ['uic-slide'];

    if (this.isActive) {
      hostClassess.push('uic-slide-active');
    }

    return hostClassess;
  }
}
