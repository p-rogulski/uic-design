import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let nativeElement: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ButtonComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        nativeElement = fixture.nativeElement;
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class for button color', () => {
    component.color = 'danger';
    fixture.detectChanges();
    expect(nativeElement).toHaveClass('uic-button-danger');
  });

  it('should set class for button size', () => {
    component.size = 'small';
    fixture.detectChanges();
    expect(nativeElement).toHaveClass('uic-button-small');
  });

  it('should set class for button link', () => {
    nativeElement.setAttribute('uic-button-link', '');
    fixture.detectChanges();
    expect(nativeElement).toHaveClass('uic-button-link');
  });

  it('should set class for button text', () => {
    nativeElement.setAttribute('uic-button-text', '');
    fixture.detectChanges();
    expect(nativeElement).toHaveClass('uic-button-text');
  });

  it('should set class for button outline', () => {
    nativeElement.setAttribute('uic-button-outline', '');
    fixture.detectChanges();
    expect(nativeElement).toHaveClass('uic-button-outline');
  });

  it('should set class for button circle', () => {
    nativeElement.setAttribute('uic-button-link', '');
    fixture.detectChanges();
    expect(nativeElement).toHaveClass('uic-button-link');
  });

  it('should set class for button icon', () => {
    nativeElement.setAttribute('uic-button-icon', '');
    fixture.detectChanges();
    expect(nativeElement).toHaveClass('uic-button-icon');
  });
});
