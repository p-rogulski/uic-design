import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';

describe('MenuItemComponent', () => {
  let fixture: ComponentFixture<MenuItemComponent>;
  let component: MenuItemComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MenuItemComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(MenuItemComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should contains separator', () => {
    const rootElement: HTMLElement = fixture.nativeElement;
    rootElement.setAttribute('withSeparator', '');
    fixture.detectChanges();
    expect(rootElement).toHaveClass('uic-menu-item-separator');
  });
});
