import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';

import { Size } from '../../core';

export type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'upload';

const buttonTypeAttributes: ReadonlyArray<string> = [
  'uic-button',
  'uic-button-outline',
  'uic-button-link',
  'uic-button-text',
  'uic-button-circle',
  'uic-button-icon',
];

@Component({
  selector:
    'button[uic-button], button[uic-button-outline], button[uic-button-link], button[uic-button-text], button[uic-button-circle], button[uic-button-icon]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent {
  @Input() public color: ButtonColor;
  @Input() public size: Size;

  private hostElement: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.hostElement = this.elementRef.nativeElement;
  }

  @HostBinding('class') public get hostClasses(): Array<string> {
    const hostClasses: Array<string> = [];

    buttonTypeAttributes.forEach((attributeName: string) => {
      if (this.hostElement.hasAttribute(attributeName)) {
        hostClasses.push(attributeName);
        return;
      }
    });

    if (this.color) {
      hostClasses.push(`uic-button-${this.color}`);
    }

    if (this.size) {
      hostClasses.push(`uic-button-${this.size}`);
    }

    return hostClasses;
  }
}
