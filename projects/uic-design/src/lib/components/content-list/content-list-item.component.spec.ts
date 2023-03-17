import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentListItemComponent } from './content-list-item.component';

describe('ContentListItemComponent', () => {
  let fixture: ComponentFixture<ContentListItemComponent>;
  let component: ContentListItemComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ContentListItemComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContentListItemComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
