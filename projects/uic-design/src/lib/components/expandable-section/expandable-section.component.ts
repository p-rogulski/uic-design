import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { ButtonColor } from '../button';

@Component({
  selector: 'uic-expandable-section',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './expandable-section.component.html',
  styleUrls: ['./expandable-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideAnimations()],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '*',
          borderWidth: '1px',
        }),
      ),
      state(
        'closed',
        style({
          height: '0',
          borderWidth: '0',
        }),
      ),
      transition('open => closed', [animate('500ms ease-in')]),
      transition('closed => open', [animate('500ms ease-out')]),
    ]),
  ],
  standalone: true,
})
export class ExpandableSectionComponent {
  @Input() public toggleButtonColor: ButtonColor;
  @Input() public toggleButtonLabel: string;

  @HostBinding('class') public get hostClass(): Array<string> {
    return ['class.uic-expandable-section'];
  }

  public isOpen = false;

  public get toggleButtonIcon(): IconDefinition {
    return this.isOpen ? faChevronUp : faChevronDown;
  }

  public toggleExpandableSectionState(): void {
    this.isOpen = !this.isOpen;
  }
}
