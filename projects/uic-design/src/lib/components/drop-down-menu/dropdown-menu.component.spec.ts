import { ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DropdownMenuComponent } from './dropdown-menu.component';

describe('DropdownMenuComponent', () => {
  let fixture: ComponentFixture<DropdownMenuComponent>;
  let component: DropdownMenuComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DropdownMenuComponent],
      providers: [Renderer2, { provide: ElementRef, useValue: new ElementRef({}) }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DropdownMenuComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should open menu', fakeAsync(() => {
    component.openMenu({ ...new PointerEvent('click'), target: document.createElement('button') });
    fixture.detectChanges();
    const listElement: HTMLElement = fixture.debugElement.query(By.css('.uic-dropdown-menu')).nativeElement;
    expect(listElement).toBeDefined();
  }));

  it('should close menu', () => {
    component.closeMenu();
    fixture.detectChanges();
    const listElement: HTMLElement = fixture.debugElement.query(By.css('.uic-dropdown-menu'))?.nativeElement;
    expect(listElement).toBeUndefined();
  });
});
