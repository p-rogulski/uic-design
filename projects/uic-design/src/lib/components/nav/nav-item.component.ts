import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener, Input } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { EmitterService } from '../../services';

@Component({
  selector: 'uic-nav-item',
  imports: [FontAwesomeModule, CommonModule],
  template: `<li class="uic-nav-item-li">
    <fa-icon *ngIf="icon" class="uic-nav-item-icon" [icon]="icon"></fa-icon>
    <span class="uic-nav-item-title" [title]="title">{{ title }}</span>
  </li>`,
  styleUrls: ['./nav-item.component.scss'],
  standalone: true,
})
export class NavItemComponent {
  @Input() public icon: IconDefinition;
  @Input() public isActive: boolean;
  @Input() public title: string;

  constructor(private emitterService: EmitterService) {}

  @HostBinding('class') get hostClass(): Array<string> {
    const hostClasses: Array<string> = ['uic-nav-item'];

    if (this.isActive) {
      hostClasses.push('uic-nav-item-active');
    }

    return hostClasses;
  }

  @HostListener('click') public click() {
    this.emitClick();
  }

  private emitClick(): void {
    this.emitterService.next(this);
  }
}
