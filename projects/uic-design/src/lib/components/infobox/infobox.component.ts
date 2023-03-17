import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'uic-infobox',
  imports: [FontAwesomeModule],
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class InfoboxComponent {
  @Input() public icon: IconDefinition = faInfoCircle;
  @Input() public title: string;

  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-infobox'];
}
