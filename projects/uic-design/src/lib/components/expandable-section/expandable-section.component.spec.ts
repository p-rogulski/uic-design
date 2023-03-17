import { ComponentFixture, TestBed, fakeAsync, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

import { ExpandableSectionComponent } from './expandable-section.component';

const CLOSED_SECTION_HEIGHT = '0px';

describe('ExpandableSectionComponent', () => {
  let fixture: ComponentFixture<ExpandableSectionComponent>;
  let component: ExpandableSectionComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ExpandableSectionComponent],
      providers: [provideNoopAnimations()],
    })

      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ExpandableSectionComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should open section', () => {
    component.toggleExpandableSectionState();
    fixture.detectChanges();
    const contentElement: HTMLElement = fixture.debugElement.query(
      By.css('.uic-expandable-section-drop-down-content'),
    ).nativeElement;
    expect(getComputedStyle(contentElement).height !== CLOSED_SECTION_HEIGHT).toBeTrue();
  });

  it('should close section', fakeAsync(() => {
    component.toggleExpandableSectionState();
    component.toggleExpandableSectionState();
    fixture.detectChanges();
    const contentElement: HTMLElement = fixture.debugElement.query(
      By.css('.uic-expandable-section-drop-down-content'),
    ).nativeElement;
    expect(getComputedStyle(contentElement).height).toEqual(CLOSED_SECTION_HEIGHT);
  }));
});
