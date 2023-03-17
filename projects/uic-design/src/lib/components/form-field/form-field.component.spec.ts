import { ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, NgControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { shortText } from 'mock/data';
import { FormFieldComponent, InputComponent, ValidationService } from 'uic-design';

describe('FormFieldComponent', () => {
  let fixture: ComponentFixture<FormFieldComponent>;
  let component: FormFieldComponent;
  let inputRef: ElementRef;
  let mockNgControl: NgControl;
  let mockElementRef: ElementRef;

  beforeEach(waitForAsync(() => {
    mockNgControl = jasmine.createSpyObj('ngControl', {}, { control: new FormControl() });
    mockElementRef = jasmine.createSpyObj('elementRef', {}, { nativeElement: {} });

    TestBed.configureTestingModule({
      imports: [FormFieldComponent],
      providers: [ValidationService, Renderer2, { provide: ElementRef, useValue: () => mockElementRef}],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FormFieldComponent);
        component = fixture.componentInstance;
        inputRef = TestBed.inject(ElementRef);
        component.input = new InputComponent(mockNgControl, inputRef);
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should set label', () => {
    component.label = shortText;

    fixture.detectChanges();
    const inputLabelElement: HTMLElement = fixture.debugElement.query(By.css('.uic-input-label'))?.nativeElement;
    expect(inputLabelElement?.textContent).toContain(shortText);
  });

  it('should set invalid state for control', () => {
    component.input.control.setErrors({ required: 'required' });
    component.input.control.markAsTouched();
    fixture.detectChanges();
    const validationElement: HTMLElement = fixture.debugElement.query(By.css('.uic-validation'))?.nativeElement;
    expect(validationElement).toBeDefined();
  });
});
