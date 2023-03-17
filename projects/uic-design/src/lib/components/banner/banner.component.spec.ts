import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { shortText } from 'mock/data';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let fixture: ComponentFixture<BannerComponent>;
  let component: BannerComponent;
  let hostElement: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BannerComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BannerComponent);
        hostElement = fixture.nativeElement;
        component = fixture.componentInstance;
        hostElement.setAttribute('info', '');
      });
  }));

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should set banner type by specific attribute', () => {
    fixture.detectChanges();
    expect(hostElement).toHaveClass('uic-banner-info');
  });

  it('should set banner title', () => {
    component.title = shortText;
    fixture.detectChanges();
    const titleTag: HTMLElement | null = hostElement.querySelector('.uic-banner-title-text');
    expect(titleTag?.textContent).toEqual(shortText);
  });

  it('should set banner description', () => {
    component.description = shortText;
    fixture.detectChanges();
    const contentTag: HTMLElement | null = hostElement.querySelector('.uic-banner-content');
    expect(contentTag?.textContent).toEqual(shortText);
  });
});
