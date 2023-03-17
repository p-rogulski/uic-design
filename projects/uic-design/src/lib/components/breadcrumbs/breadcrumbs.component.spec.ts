import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmitterService } from '../../services';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbsComponent', () => {
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
});
