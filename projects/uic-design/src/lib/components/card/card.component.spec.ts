import { APP_INITIALIZER } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressBook, faPenToSquare } from '@fortawesome/free-regular-svg-icons';

import { color, shortText } from 'mock/data';

import { CardComponent } from './card.component';

describe('Card', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CardComponent, FontAwesomeModule],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => {
            iconLibrary.addIcons(faPenToSquare);
          },
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should set title', () => {
    component.title = shortText;
    fixture.detectChanges();
    const cardTititleElement: HTMLElement = fixture.debugElement.query(By.css('.uic-card-title')).nativeElement;
    expect(cardTititleElement.textContent).toEqual(shortText);
  });

  it('should set icon', () => {
    component.icon = faAddressBook;
    fixture.detectChanges();
    const cardIconElement: HTMLElement = fixture.debugElement.query(By.css('.uic-card-icon')).nativeElement;
    expect(cardIconElement).toBeDefined();
  });

  it('should set icon size', () => {
    component.icon = faAddressBook;
    component.iconSize = '10x';
    fixture.detectChanges();
    const cardIconElement: HTMLElement = fixture.debugElement.query(By.css('.uic-card-icon')).nativeElement;
    expect(cardIconElement.getAttribute('ng-reflect-size')).toEqual('10x');
  });

  it('should set text color', () => {
    component.textColor = color;
    fixture.detectChanges();
    const rootElement: HTMLElement = fixture.nativeElement;
    expect(rootElement).toHaveClass('uic-text-color-primary');
  });

  it('should set background color', () => {
    component.bgColor = color;
    fixture.detectChanges();
    const rootElement: HTMLElement = fixture.nativeElement;
    expect(rootElement).toHaveClass('uic-bg-color-primary');
  });
});
