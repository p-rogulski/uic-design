import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { Destroyable } from '../../core';
import { EmitterService } from '../../services';

import { BreadcrumbComponent } from './breadcrumb.component';

@Component({
  selector: 'uic-breadcrumbs',
  imports: [BreadcrumbComponent],
  template: '<ul class="uic-breadcrumbs-ul"><ng-content></ng-content></ul>',
  styleUrls: ['./breadcrumbs.component.scss'],
  providers: [EmitterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class BreadcrumbsComponent extends Destroyable implements AfterContentInit {
  @ContentChildren(BreadcrumbComponent) public childComponents: QueryList<BreadcrumbComponent>;

  constructor(private emitterService: EmitterService) {
    super();
  }

  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-breadcrumbs'];

  private itemClickSubscription: Subscription;

  public ngAfterContentInit(): void {
    this.subscribeItemSelection();
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.itemClickSubscription.unsubscribe();
  }

  private resetItemSelection(): void {
    this.childComponents.forEach((breadcrumb: BreadcrumbComponent) => {
      if (breadcrumb.isActive) {
        breadcrumb.isActive = false;
        return;
      }
    });
  }

  private subscribeItemSelection(): void {
    this.itemClickSubscription = this.emitterService.subscribe((selectedItem: BreadcrumbComponent) => {
      this.resetItemSelection();
      selectedItem.isActive = true;
    });
  }
}
