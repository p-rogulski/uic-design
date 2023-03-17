import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  Input,
} from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

import { Destroyable, ValidationParams } from '../../core';
import { InputComponent } from '../input';
import { InputLabelComponent } from '../input-label';
import { ValidationComponent } from '../validation';

@Component({
  selector: 'uic-form-field',
  imports: [CommonModule, InputLabelComponent, ValidationComponent],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
})
export class FormFieldComponent extends Destroyable implements AfterViewInit {
  @Input() public label: string;

  @ContentChild(InputComponent, { static: true }) public input: InputComponent;

  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-form-field'];

  public errors: ValidationErrors | null;
  public params: ValidationParams;
  public control: FormControl;

  private htmlInputElement: HTMLInputElement;

  public ngAfterViewInit(): void {
    if(this.input) {
      this.htmlInputElement = this.input.elementRef.nativeElement;
      this.control = this.input.ngControl.control as FormControl;
      this.setParams();
    }
  }

  private setParams(): void {
    const placeholder: string = this.htmlInputElement.getAttribute('placeholder') || '';
    this.params = {
      fieldLabel: this.label || placeholder,
    };
  }
}
