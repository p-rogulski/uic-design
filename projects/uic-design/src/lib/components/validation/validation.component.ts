import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { ValidationParams } from '../../core';
import { ValidationService } from '../../services';

@Component({
  selector: 'uic-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ValidationComponent {
  @Input() public errors: ValidationErrors | null;
  @Input() public params: ValidationParams | null;

  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-validation'];

  constructor(private validationService: ValidationService) {}

  public get errorKeys(): string[] {
    return this.errors ? Object.keys(this.errors) : [];
  }

  public getValidationMessage(key: string): string | undefined {
    const error = this.errors ? this.errors[key] : {};
    return this.validationService.getValidationMessage(key, {
      ...this.params,
      ...error,
    });
  }

  public hasValidationMessage(key: string): boolean {
    return this.validationService.hasValidationMessage(key);
  }
}
