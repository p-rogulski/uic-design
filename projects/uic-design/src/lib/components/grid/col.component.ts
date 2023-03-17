import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

type BreakpointSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

const breakpoints: ReadonlyArray<string> = ['xs', 'sm', 'md', 'lg', 'xl'];

@Component({
  selector: 'uic-col',
  template: '<ng-content></ng-content>',
  styleUrls: ['./col.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ColComponent {
  @Input() public lg: BreakpointSize;
  @Input() public md: BreakpointSize;
  @Input() public sm: BreakpointSize;
  @Input() public xl: BreakpointSize;
  @Input() public xs: BreakpointSize;

  @HostBinding('class') public get hostClasses(): Array<string> {
    return this.getClasses(breakpoints);
  }

  private getClasses(breakpoints: ReadonlyArray<string>): Array<string> {
    const hostClasses: Array<string> = ['uic-col'];
    breakpoints.forEach((breakpoint: string) => {
      const breakpointSize: BreakpointSize = Object.entries(this).find(
        (keyValuePair) => keyValuePair[0] === breakpoint,
      )?.[1];

      if (breakpointSize) {
        hostClasses.push(`uic-col-${breakpoint}-${breakpointSize}`);
      }
    });

    return hostClasses;
  }
}
