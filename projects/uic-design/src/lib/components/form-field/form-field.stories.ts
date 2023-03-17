import { APP_INITIALIZER } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { FormFieldComponent, UicDesignModule, ValidationService } from 'uic-design';

export default {
  title: 'Forms/FormField',
  component: FormFieldComponent,
  parameters: {
    docs: {
      description: {
        component:
          'uic-form-field is a wrapper for input uic-input. It provides form validation context and extra space between fields.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (validationService: ValidationService) => async () => {
            const validationMessages: Map<any, (args: Args) => string> = new Map([
              ['required', (args: Args) => `Field '${args?.fieldLabel}' is required.`],
              [
                'minlength',
                (args: Args) => {
                  return `Field '${args?.fieldLabel}' should contain at least '${args?.requiredLength}' characters.`;
                },
              ],
            ]);

            validationService.defineValidationMessages(validationMessages);
            return validationService;
          },
          multi: true,
          deps: [ValidationService],
        },
      ],
      imports: [ReactiveFormsModule, UicDesignModule],
    }),
  ],
} as Meta;

const Template: Story = (args: Args) => {
  const form: UntypedFormGroup = new UntypedFormGroup({
    login: new UntypedFormControl(null, [Validators.required]),
    password: new UntypedFormControl(null, [Validators.required,Validators.minLength(8)]),
  });
  const loginControl: AbstractControl | null = form.get('login');
  const passwordControl: AbstractControl | null = form.get('password');

  const onSubmit: () => void = () => {
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }

    alert('Form has been send!');
  };

  return {
    props: {
      ...args,
      form,
      loginControl,
      passwordControl,
      onSubmit,
    },
    template: `<form [formGroup]="form" (submit)="onSubmit()">
    <uic-form-field label="login">
      <input uic-input [formControl]="loginControl" placeholder="a@b.com">
    </uic-form-field>
    <uic-form-field label="password">
      <input uic-input [formControl]="passwordControl" placeholder="Minimum '8' characters">
    </uic-form-field>
    <button uic-button color="primary" size="wide" type="submit">Zapisz</button>
  </form>`,
  };
};

export const Basic = Template.bind({});
