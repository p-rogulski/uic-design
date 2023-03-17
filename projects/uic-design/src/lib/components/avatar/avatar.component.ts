import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { Color, Size } from '../../core';

@Component({
  selector: 'uic-avatar',
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AvatarComponent {
  @Input() public imgSrc: string;
  @Input() public altText: string;
  @Input() public size: Size = 'medium';
  @Input() public altTextColor: Color = 'light';
  @Input() public bgColor: Color = 'primary';

  @HostBinding('class') public get hostClasses(): Array<string> {
    const hostClasses: Array<string> = ['uic-avatar', `uic-avatar-${this.size}`];

    if (!this.imgSrc) {
      hostClasses.push(...[`uic-bg-color-${this.bgColor}`, `uic-text-color-${this.altTextColor}`]);
    }

    return hostClasses;
  }
}
