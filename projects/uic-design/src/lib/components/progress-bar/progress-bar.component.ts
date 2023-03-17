import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';

import { Color } from 'uic-design/core';

@Component({
  selector: 'uic-progress-bar',
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  standalone: true,
})
export class ProgressBarComponent {
  @Input() label: string;
  @Input() bgColor: Color = 'primary';

  @Input() public set value(progress: number) {
    this.valueInPercent = `${progress}%`;
    this.progress.nativeElement.style.width = this.valueInPercent;
  }

  @ViewChild('progress', { static: true }) public progress: ElementRef<HTMLDivElement>;

  @HostBinding('class') public classes: string = 'uic-progress-bar';

  public valueInPercent: string;
}

