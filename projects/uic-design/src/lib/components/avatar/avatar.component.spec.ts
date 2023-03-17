import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { char } from 'mock/data';

import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AvatarComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AvatarComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should contains img tag', () => {
    component.imgSrc = 'path/to/img.jpg';
    fixture.detectChanges();
    const imgElement: HTMLElement = fixture.debugElement.query(By.css('.uic-avatar-img')).nativeElement;
    expect(imgElement).toBeDefined();
  });

  it('should set altText', () => {
    component.altText = char;
    fixture.detectChanges();
    const textElement: HTMLElement = fixture.debugElement.query(By.css('.uic-avatar-text')).nativeElement;
    expect(textElement.textContent).toContain(char);
  });

  it('should set specific size', () => {
    component.size = 'small';
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('uic-avatar-small');
  });

  it('should set specific bgColor', () => {
    component.bgColor = 'secondary';
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('uic-bg-color-secondary');
  });

  it('should set specific altTextColor', () => {
    component.altTextColor = 'secondary';
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('uic-text-color-secondary');
  });
});
