import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'input[uic-checkbox]',
  template: '',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
})
export class CheckboxComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    (this.elementRef.nativeElement as HTMLElement).setAttribute('type', 'checkbox');
  }
}

