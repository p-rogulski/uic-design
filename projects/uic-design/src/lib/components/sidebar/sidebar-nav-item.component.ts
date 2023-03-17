import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, Self } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Icon } from '@fortawesome/fontawesome-svg-core';

import { EmitterService } from '../../services';

@Component({
  selector: 'uic-sidebar-nav-item',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './sidebar-nav-item.component.html',
  styleUrls: ['./sidebar-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [provideAnimations()],
  animations: [
    trigger('iconSmallBig', [
      state(
        'iconSmall',
        style({
          fontSize: '*',
        }),
      ),
      state(
        'iconBig',
        style({
          fontSize: '24px',
        }),
      ),
      transition('iconSmall => iconBig', [animate('0.5s')]),
      transition('iconBig => iconSmall', [animate('0.5s')]),
    ]),
  ],
  standalone: true,
})
export class SidebarNavItemComponent {
  @Input() public icon: Icon;
  @Input() public onlyIcon: boolean;
  @Input() public isActive: boolean;
  @Input() public targetUrl: string;

  constructor(private emitterService: EmitterService) {}

  @HostBinding('class') public get hostClasses(): ReadonlyArray<string> {
    const hostClasses: Array<string> = ['uic-sidebar-nav-item'];

    if (this.onlyIcon) {
      hostClasses.push('uic-sidebar-nav-item-only-icon');
    }

    if (this.isActive) {
      hostClasses.push('uic-sidebar-nav-item-active');
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

