import { APP_BASE_HREF } from '@angular/common';
import { APP_INITIALIZER, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Args, Meta, Story, moduleMetadata } from '@storybook/angular';

import { BoxComponent, StepperComponent } from 'uic-design';

@Component({
  templateUrl: './stepper.component.html',
  template: '<img src="/img/lamborgini_400x200.png">',
})
class Step1Component {}

@Component({
  templateUrl: './stepper.component.html',
  template: '<img src="/img/ferrari_400x200.png">',
})
class Step2Component {}

@Component({
  templateUrl: './stepper.component.html',
  template: '<img src="/img/maserati_400x200.png">',
})
class Step3Component {}

const routes: Routes = [
  {
    path: 'lamborgini',
    component: Step1Component,
  },
  {
    path: 'ferrari',
    component: Step2Component,
  },
  {
    path: 'maserati',
    component: Step3Component,
  },

  { path: '', redirectTo: '/lamborgini', pathMatch: 'full' },
];

const baseProps = {
  complete,
  faArrowRight,
  faArrowLeft,
};

function complete() {
  window.alert('Process completed!');
}

export default {
  title: 'Progress/Stepper',
  component: StepperComponent,
  parameters: {
    docs: {
      description: {
        component: 'uic-stepper defines process using steps',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [RouterModule.forRoot(routes, { useHash: true }), FontAwesomeModule, BoxComponent],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/',
        },
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => {
            iconLibrary.addIcons(faArrowRight, faArrowLeft);
          },
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
} as Meta;

const BasicTemplate: Story = (args: Args) => {
  const steps = [
    {
      component: Step1Component,
      label: 'Lamborgini',
      description: 'max speed 430km/h',
    },
    {
      component: Step2Component,
      label: 'Ferrari',
      description: 'max speed 420km/h',
    },
    {
      component: Step3Component,
      label: 'Maserati',
      description: 'max speed 320km/h',
    },
  ];
  return {
    props: {
      ...args,
      ...baseProps,
      steps,
    },
    template: `
    <uic-stepper [steps]="steps" (complete)="complete()" prevButtonLabel="Back" nextButtonLabel="Next" finishButtonLabel="Finish"></uic-stepper>
  `,
  };
};

const RouteStepTemplate: Story = (args: Args) => {
  const steps = [
    { path: '/lamborgini', label: 'Lamborgini' },
    { path: '/ferrari', label: 'Ferrari' },
    { path: '/maserati', label: 'Maserati' },
  ];

  return {
    props: {
      ...args,
      ...baseProps,
      steps,
    },
    template: `
    <uic-stepper [steps]="steps" (complete)="complete()" prevButtonLabel="Back" nextButtonLabel="Next" finishButtonLabel="Finish"></uic-stepper>
  `,
  };
};

export const Basic: Story = BasicTemplate.bind({});
export const RouteSteps: Story = RouteStepTemplate.bind({});
