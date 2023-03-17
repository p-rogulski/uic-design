import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input } from '@angular/core';

import { EmitterService } from '../../services';

@Component({
  selector: 'uic-breadcrumb',
  template: '<li class="uic-breadcrumb-li" [title]="title">{{title}}</li>',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BreadcrumbComponent {
  @Input() public isActive: boolean;
  @Input() public title: string;

  constructor(private emitterService: EmitterService) {}

  @HostBinding('class') public get hostClasses(): Array<string> {
    const hostClasses: Array<string> = ['uic-breadcrumb'];

    if (this.isActive) {
      hostClasses.push('uic-breadcrumb-active');
    }

    return hostClasses;
  }

  @HostListener('click') public click() {
    this.emitClick();
  }

  private emitClick(): void {
    this.emitterService.next(this);
  }
}
