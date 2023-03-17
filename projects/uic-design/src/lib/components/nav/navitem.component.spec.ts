import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmitterService, NavItemComponent } from 'uic-design';

describe('NavItemComponent', () => {
  let fixture: ComponentFixture<NavItemComponent>;
  let component: NavItemComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavItemComponent],
      providers: [EmitterService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(NavItemComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should set active class by default', () => {
    component.isActive = true;
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('uic-nav-item-active');
  });
});
