import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

import { Args } from '../../core';

@Injectable()
export class ValidationService {
  private customValidators: ValidatorFn[] = [];
  private validationMessages: Map<string, (args: Args) => string> = new Map();

  public defineCustomValidators(customValidators: ValidatorFn[]): void {
    this.customValidators = [...this.customValidators, ...customValidators];
  }

  public defineValidationMessages(validationMessages: Map<string, (args: Args) => string>): void {
    this.validationMessages = new Map([...this.validationMessages.entries(), ...validationMessages.entries()]);
  }

  public getValidationMessage(key: string, args: Args): string | undefined {
    return this.validationMessages?.get(key)?.(args);
  }

  public hasValidationMessage(key: string): boolean {
    return this.validationMessages.has(key);
  }
}
