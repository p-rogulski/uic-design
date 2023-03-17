import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'uic-input-decorator',
  templateUrl: './input-decorator.component.html',
  styleUrls: ['./input-decorator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class InputDecoratorComponent {
  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-input-decorator'];
}
