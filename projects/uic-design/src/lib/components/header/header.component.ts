import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'h1[uic-header],h2[uic-header],h3[uic-header],h4[uic-header],h5[uic-header]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderComponent {
  @Input() public borderBottom: boolean;

  @HostBinding('class') get hostClasses(): Array<string> {
    const hostClasses: Array<string> = ['uic-header'];

    if (this.borderBottom) {
      hostClasses.push('uic-border-bottom');
    }

    return hostClasses;
  }
}
