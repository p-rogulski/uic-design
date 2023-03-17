import { ChangeDetectionStrategy, Component, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'uic-menu-item',
  template: '<li class="uic-menu-item-content"><ng-content></ng-content></li>',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MenuItemComponent {
  constructor(private elementRef: ElementRef) {}

  @HostBinding('class') public get hostClasses(): Array<string> {
    const hostClasses: Array<string> = ['uic-menu-item'];

    if (this.elementRef.nativeElement.hasAttribute('withSeparator')) {
      hostClasses.push('uic-menu-item-separator');
    }

    return hostClasses;
  }
}
