import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentListComponent } from './content-list.component';

describe('ContentListComponent', () => {
  let fixture: ComponentFixture<ContentListComponent>;
  let component: ContentListComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ContentListComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContentListComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
