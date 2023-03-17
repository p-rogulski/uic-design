import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

import { IconDefinition, faImage } from '@fortawesome/free-solid-svg-icons';

import { Size } from '../../core';

@Component({
  selector: 'uic-picturebox',
  imports: [CommonModule],
  templateUrl: './picturebox.component.html',
  styleUrls: ['./picturebox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PictureboxComponent {
  @Input() public imgSrc: string;
  @Input() public size: Size = 'medium';

  @ViewChild('picturebox') public picturebox: ElementRef;

  public readonly faImageIcon: IconDefinition = faImage;

  @HostBinding('class') public get hostClasses(): Array<string> {
    const hostClasses: Array<string> = ['uic-picturebox', `uic-picturebox-${this.size}`];

    if (!this.imgSrc) {
      hostClasses.push('uic-picturebox-empty');
    }

    return hostClasses;
  }
}
