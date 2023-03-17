import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

import { Color } from '../../core';

@Component({
  selector: 'uic-card',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CardComponent {
  @Input() public bgColor: Color;
  @Input() public textColor: Color;
  @Input() public icon: IconProp;
  @Input() public iconSize: SizeProp = '2x';
  @Input() public title: string;

  private hostElement: HTMLElement;

  constructor(protected elementRef: ElementRef) {
    this.hostElement = this.elementRef.nativeElement;
  }

  @HostBinding('class') public get hostClasses(): Array<string> {
    const hostClasses: Array<string> = ['uic-card'];

    if (this.bgColor) {
      hostClasses.push(`uic-bg-color-${this.bgColor}`);
    }

    if (this.textColor) {
      hostClasses.push(`uic-text-color-${this.textColor}`);
    }

    if (this.hostElement.hasAttribute('wide')) {
      hostClasses.push('uic-card-wide');
    }

    return hostClasses;
  }
}
