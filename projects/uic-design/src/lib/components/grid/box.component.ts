import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';

type Flow = 'column' | 'row' | 'wrap';
type AlignItems = 'initial' | 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type JustyfyContent = 'initial' | 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';

@Component({
  selector: 'uic-box',
  template: '<ng-content></ng-content>',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BoxComponent {
  @Input()
  public alingItems: AlignItems = 'initial';

  @Input()
  public flow: Flow = 'row';

  @Input()
  public justifyContent: JustyfyContent = 'initial';

  private hostElement: HTMLElement;

  constructor(protected elementRef: ElementRef) {
    this.hostElement = this.elementRef.nativeElement;
  }

  @HostBinding('class') public get hostClass(): Array<string> {
    return this.setPaddingClass(this.setFlowClass(this.setAlignClass(this.setJustifyClass(['uic-box']))));
  }

  private setPaddingClass(currenthostClasses: Array<string>): Array<string> {
    const hostClasses: Array<string> = [...currenthostClasses];

    if (this.hostElement.hasAttribute('wide')) {
      hostClasses.push('uic-box-wide');
    }

    if (this.hostElement.hasAttribute('noPadding')) {
      hostClasses.push('uic-box-no-padding');
    }
    return hostClasses;
  }

  private setFlowClass(currenthostClasses: Array<string>): Array<string> {
    const hostClasses: Array<string> = [...currenthostClasses];
    if (this.flow === 'column') {
      hostClasses.push('uic-box-column');
    } else if (this.flow === 'row') {
      hostClasses.push('uic-box-row');
    } else if (this.flow === 'wrap') {
      hostClasses.push('uic-box-wrap');
    }
    return hostClasses;
  }

  private setAlignClass(currenthostClasses: Array<string>): Array<string> {
    const hostClasses: Array<string> = [...currenthostClasses];

    if (this.alingItems === 'end') {
      hostClasses.push('uic-box-align-end');
    } else if (this.alingItems === 'center') {
      hostClasses.push('uic-box-align-center');
    } else if (this.alingItems === 'stretch') {
      hostClasses.push('uic-box-align-stretch');
    } else if (this.alingItems === 'baseline') {
      hostClasses.push('uic-box-align-baseline');
    } else if (this.alingItems === 'start') {
      hostClasses.push('uic-box-align-start');
    }
    return hostClasses;
  }

  private setJustifyClass(currenthostClasses: Array<string>): Array<string> {
    const hostClasses: Array<string> = [...currenthostClasses];

    if (this.justifyContent === 'end') {
      hostClasses.push('uic-box-justify-end');
    } else if (this.justifyContent === 'center') {
      hostClasses.push('uic-box-justify-center');
    } else if (this.justifyContent === 'space-between') {
      hostClasses.push('uic-box-justify-space-between');
    } else if (this.justifyContent === 'space-around') {
      hostClasses.push('uic-box-justify-space-around');
    } else if (this.justifyContent === 'space-evenly') {
      hostClasses.push('uic-box-justify-space-evenly');
    }
    return hostClasses;
  }
}
