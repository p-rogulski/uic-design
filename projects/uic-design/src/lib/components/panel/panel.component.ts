import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { BoxComponent } from '../grid';

type PanelSize = 'wide' | 'half';

@Component({
  selector: 'uic-panel',
  imports: [BoxComponent],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PanelComponent {
  @Input() public size: PanelSize;

  @HostBinding('class') get hostClasses(): Array<string> {
    const hostClasses: Array<string> = ['uic-panel'];

    if (this.size === 'half') {
      hostClasses.push('uic-panel-half');
    }

    if (this.size === 'wide') {
      hostClasses.push('uic-panel-wide');
    }

    return hostClasses;
  }
}
