import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { shortText } from 'mock/data';
import { EmitterService } from 'uic-design';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let fixture: ComponentFixture<BreadcrumbComponent>;
  let component: BreadcrumbComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BreadcrumbComponent],
      providers: [EmitterService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BreadcrumbComponent);
        component = fixture.componentInstance;
        TestBed.inject(EmitterService);
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should set correct title', () => {
    component.title = shortText;
    fixture.detectChanges();
    const liElement = fixture.nativeElement.querySelector('.uic-breadcrumb-li') as HTMLElement;
    expect(liElement.textContent).toEqual(shortText);
  });

  it('should set child active class', () => {
    component.isActive = true;
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('uic-breadcrumb-active');
  });
});
