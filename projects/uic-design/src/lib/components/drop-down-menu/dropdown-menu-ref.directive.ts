import { Directive, HostListener, Input } from '@angular/core';

import { DropdownMenuComponent } from './dropdown-menu.component';

@Directive({
  selector: '[uicDropdownMenuRef]',
  standalone: true,
})
export class DropdownMenuRefDirective {
  @Input() public uicDropdownMenuRef: DropdownMenuComponent;

  @HostListener('click', ['$event'])
  public onClick(event: PointerEvent) {
    this.uicDropdownMenuRef.openMenu(event);
  }
}
