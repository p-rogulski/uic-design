import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { ButtonComponent } from '../button';

type SidebarColor = 'primary' | 'light' | 'none';
type SidebarLocation = 'left' | 'right';

@Component({
  selector: 'uic-sidebar',
  imports: [CommonModule, FontAwesomeModule, ButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideAnimations()],
  animations: [
    trigger('expandCollapse', [
      state(
        'expand',
        style({
          width: '35px',
        }),
      ),
      state(
        'collapse',
        style({
          width: '*',
          borderWidth: '0',
        }),
      ),
      transition('expand => collapse', [animate('500ms ease-in')]),
      transition('collapse => expand', [animate('500ms ease-out')]),
    ]),
  ],
  standalone: true,
})
export class SidebarComponent implements OnInit {
  @Input() public bgColor: SidebarColor;
  @Input() public location: SidebarLocation;
  @Input() public isExpandable = true;

  @Output() public expand: EventEmitter<boolean> = new EventEmitter();

  public isExpanded = false;

  public get toggleButtonIcon(): IconDefinition {
    if (this.location === 'right') {
      return this.isExpanded ? faChevronRight : faChevronLeft;
    }
    return this.isExpanded ? faChevronLeft : faChevronRight;
  }

  @HostBinding('class') get hostClasses(): Array<string> {
    const hostClasses: Array<string> = ['uic-sidebar'];

    if (this.bgColor) {
      hostClasses.push(`uic-sidebar-${this.bgColor}`);
    }

    if (this.location) {
      hostClasses.push(`uic-sidebar-${this.location}`);
    }

    return hostClasses;
  }

  public ngOnInit(): void {
    this.initSidebarState();
  }

  public changeSidebarState(): void {
    this.isExpanded = !this.isExpanded;
    this.expand.emit(this.isExpanded);
  }

  private initSidebarState() {
    if (!this.isExpandable) {
      this.expand.emit(true);
    }
  }
}
