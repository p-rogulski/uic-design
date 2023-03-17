import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmitterService, NavComponent } from 'uic-design';

describe('NavComponent', () => {
  let fixture: ComponentFixture<NavComponent>;
  let component: NavComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NavComponent],
      providers: [EmitterService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
