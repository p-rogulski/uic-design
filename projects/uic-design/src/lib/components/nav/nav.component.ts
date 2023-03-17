import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
  Self,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { Color, Destroyable, Direction } from '../../core';
import { EmitterService } from '../../services';

import { NavItemComponent } from './nav-item.component';

@Component({
  selector: 'uic-nav',
  imports: [CommonModule],
  template: '<ng-content></ng-content>',
  styleUrls: ['./nav.component.scss'],
  providers: [EmitterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class NavComponent extends Destroyable implements AfterViewInit, OnDestroy {
  @Input() public direction: Direction;
  @Input() public textColor: Color;
  @Input() public markerColor: Color;

  @ContentChildren(NavItemComponent) public childComponents: QueryList<NavItemComponent>;

  constructor(@Self() private emitterService: EmitterService) {
    super();
  }

  @HostBinding('class') get hostClass(): Array<string> {
    const hostClasses: Array<string> = ['uic-nav'];

    if (this.isVertical) {
      hostClasses.push('uic-nav-vertical');
    }

    if (this.textColor) {
      hostClasses.push(`uic-text-color-${this.textColor}`);
    }

    if (this.markerColor) {
      hostClasses.push(`uic-border-color-${this.markerColor}`);
    }

    return hostClasses;
  }

  public get isVertical(): boolean {
    return this.direction === 'vertical';
  }

  private itemClickSubscription: Subscription;

  public ngAfterViewInit(): void {
    this.subscribeItemSelection();
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    if (this.itemClickSubscription) {
      this.itemClickSubscription.unsubscribe();
    }
  }

  private resetItemSelection(): void {
    this.childComponents.forEach((navItem: NavItemComponent) => {
      if (navItem.isActive) {
        navItem.isActive = false;
        return;
      }
    });
  }

  private subscribeItemSelection(): void {
    this.itemClickSubscription = this.emitterService.subscribe((selectedItem: NavItemComponent) => {
      this.resetItemSelection();
      selectedItem.isActive = true;
    });
  }
}
