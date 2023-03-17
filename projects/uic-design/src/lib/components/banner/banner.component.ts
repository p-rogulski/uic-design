import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faBan, faCheckCircle, faInfoCircle, faWarning } from '@fortawesome/free-solid-svg-icons';

enum BannerType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

@Component({
  selector: 'uic-banner[info], uic-banner[success], uic-banner[warning], uic-banner[error] ',
  imports: [CommonModule, FontAwesomeModule],
  styleUrls: ['./banner.component.scss'],
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BannerComponent {
  @Input() public description: string;
  @Input() public title: string;

  constructor(private elementRef: ElementRef) {}

  @HostBinding('class.uic-banner-info') public get info() {
    return this.hasAttribute(BannerType.info);
  }

  @HostBinding('class.uic-banner-success') public get success(): boolean {
    return this.hasAttribute(BannerType.success);
  }

  @HostBinding('class.uic-banner-warning') public get warning(): boolean {
    return this.hasAttribute(BannerType.warning);
  }

  @HostBinding('class.uic-banner-error') public get error(): boolean {
    return this.hasAttribute(BannerType.error);
  }

  public get icon(): IconDefinition {
    switch (true) {
      case this.info:
        return faInfoCircle;
      case this.success:
        return faCheckCircle;
      case this.warning:
        return faWarning;
      case this.error:
        return faBan;
      default:
        return faInfoCircle;
    }
  }

  private hasAttribute(attribute: string): boolean {
    return this.elementRef.nativeElement.hasAttribute(attribute);
  }
}
