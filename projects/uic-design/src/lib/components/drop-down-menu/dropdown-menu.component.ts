import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

import { Point } from '../../core';

@Component({
  selector: 'uic-menu',
  imports: [CommonModule],
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DropdownMenuComponent implements AfterViewChecked {
  @ViewChild('menu') public menuRef: ElementRef;

  public isMenuOpen: boolean;

  private menuCaller: HTMLElement;

  constructor(private rerender: Renderer2, private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  public documentClick(event: PointerEvent) {
    if (!this.menuCaller?.isSameNode(event.target as HTMLElement)) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  public windowResize() {
    if (this.menuRef) {
      this.setMenuStyle();
    }
  }

  public closeMenu(): void {
    this.isMenuOpen = false;
  }

  public ngAfterViewChecked(): void {
    if (this.menuRef) {
      this.setMenuStyle();
    }
  }

  public openMenu(event: PointerEvent): void {
    this.isMenuOpen = true;
    this.menuCaller = event.target as HTMLElement;
  }

  private calculateMenuPosition(menuCaller: HTMLElement, menu: HTMLElement): Point {
    const topSpacing = 5;
    const menuDimensionX: number = menuCaller.offsetLeft + menu.clientWidth;
    const menuDimensionY: number = menuCaller.offsetTop + menu.clientHeight;

    let menuPositionX: number;
    let menuPositionY: number;

    if (menuDimensionX > window.innerWidth) {
      menuPositionX = menuCaller.offsetLeft - menu.clientWidth + menuCaller.clientWidth;
    } else {
      menuPositionX = menuCaller.offsetLeft;
    }

    if (menuDimensionY > window.innerHeight) {
      menuPositionY = menuCaller.offsetTop - menu.clientHeight - topSpacing;
    } else {
      menuPositionY = menuCaller.offsetTop + menuCaller.clientHeight + topSpacing;
    }

    return { x: menuPositionX, y: menuPositionY };
  }

  private setMenuStyle(): void {
    const menuPosition: { x: number; y: number } = this.calculateMenuPosition(
      this.menuCaller,
      this.menuRef.nativeElement,
    );

    this.rerender.setStyle(this.elementRef.nativeElement, 'top', menuPosition.y + 'px');

    this.rerender.setStyle(this.elementRef.nativeElement, 'left', menuPosition.x + 'px');
  }
}
