import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  QueryList,
} from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { ButtonComponent } from '../button';
import { BoxComponent } from '../grid';
import { PanelComponent } from '../panel';

import { SlideComponent } from './slide.component';

interface SlideButton {
  id: number;
  isActive: boolean;
  switchIcon: IconDefinition;
}

@Component({
  selector: 'uic-slide-panel',
  imports: [CommonModule, FontAwesomeModule, PanelComponent, BoxComponent, ButtonComponent],
  templateUrl: './slide-panel.component.html',
  styleUrls: ['./slide-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SlidePanelComponent implements AfterContentInit {
  @Input() public bgColor: string;

  @ContentChildren(SlideComponent) public slides: QueryList<SlideComponent>;

  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-slide-panel'];

  public slideButtons: Array<SlideButton> = [];

  public ngAfterContentInit(): void {
    this.addSlideSwitch();
  }

  public switchSlide(slideIndex: number): void {
    this.slides.forEach((slide: SlideComponent, index) => {
      if (slideIndex === index) {
        slide.isActive = true;
      } else {
        slide.isActive = false;
      }
    });
  }

  public trackById(index: number, switchButton: SlideButton): number {
    return switchButton.id;
  }

  private addSlideSwitch(): void {
    this.slides?.forEach(({ switchIcon, isActive }: SlideComponent, index) => {
      this.slideButtons.push({ id: index, switchIcon, isActive });
    });
  }
}
