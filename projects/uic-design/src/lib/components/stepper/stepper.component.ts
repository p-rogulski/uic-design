import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, Type } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { LetDirective } from '../../directives';
import { ButtonComponent } from '../button';
import { BoxComponent } from '../grid';

export interface Step {
  component: Type<Component>;
  description?: string;
  label?: string;
}

export interface RouteStep {
  description?: string;
  label?: string;
  path: string;
}

@Component({
  selector: 'uic-stepper',
  imports: [CommonModule, RouterModule, FontAwesomeModule, BoxComponent, ButtonComponent, LetDirective],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class StepperComponent {
  @Input() public activeStep = 1;
  @Input() public finishButtonLabel: string;
  @Input() public nextButtonLabel: string;
  @Input() public prevButtonLabel: string;
  @Input() public showActiveStep = true;
  @Input() public steps: Array<Step | RouteStep> = [];

  @Output() public changeStep: EventEmitter<Step | RouteStep> = new EventEmitter();
  @Output() public complete: EventEmitter<void> = new EventEmitter();

  @HostBinding('class') hostClasses: ReadonlyArray<string> = ['uic-stepper'];

  public faArrowLeft: IconDefinition = faArrowLeft;
  public faArrowRight: IconDefinition = faArrowRight;

  constructor(private router: Router) {}

  public get contentComponent(): Type<Component> {
    return (this.steps[this.activeStep - 1] as Step).component;
  }

  public get isLastStep(): boolean {
    return this.activeStep === this.steps.length;
  }

  public get prevButtonVisibility(): string {
    return this.activeStep === 1 ? 'hidden' : 'visible';
  }

  public goToNextStep(): void {
    if (this.isLastStep) {
      this.complete.emit();
    } else {
      this.activeStep++;
      this.afterStepChanged();
    }
  }

  public goToPrevStep(): void {
    this.activeStep--;
    this.afterStepChanged();
  }

  public isIncludesStepsWithRoute(steps: Array<Step | RouteStep>): steps is RouteStep[] {
    return this.isRouteStep(steps[0]);
  }

  private afterStepChanged(): void {
    const step: Step | RouteStep = this.steps[this.activeStep - 1];

    if (this.isRouteStep(step)) {
      this.navigateToRouteStep(step as RouteStep);
    } else {
      this.changeStep.emit(step);
    }
  }

  private isRouteStep(step: Step | RouteStep): step is RouteStep {
    return (step as RouteStep).path !== undefined;
  }

  private navigateToRouteStep(step: RouteStep): void {
    this.router.navigate([step.path]).then(() => this.changeStep.emit(step));
  }
}
