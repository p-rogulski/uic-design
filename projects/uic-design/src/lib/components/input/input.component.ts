import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'input[uic-input]',
  template: '',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class InputComponent {
  @HostBinding('class') public hostClass: ReadonlyArray<string> = ['uic-input'];

  constructor(public elementRef: ElementRef, @Optional() public ngControl: NgControl) {}
}
