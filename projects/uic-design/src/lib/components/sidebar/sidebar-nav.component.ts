import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  QueryList,
  Self,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { EmitterService } from '../../services';
import { SidebarNavItemComponent } from './sidebar-nav-item.component';

@Component({
  selector: 'uic-sidebar-nav',
  imports: [CommonModule],
  providers: [EmitterService],
  template: '<ng-content></ng-content>',
  styleUrls: ['./sidebar-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SidebarNavComponent implements AfterContentInit, OnDestroy {
  @Input() public set onlyIcons(value: boolean) {
    this._onlyIcons = value;
    if (this.childComponents) {
      this.setOnlyIconChildState();
    }
  }

  @Output() public itemSelection: EventEmitter<SidebarNavItemComponent> = new EventEmitter();

  @ContentChildren(SidebarNavItemComponent) public childComponents: QueryList<SidebarNavItemComponent>;

  @HostBinding('class') public hostClasses: ReadonlyArray<string> = ['uic-sidebar-nav'];

  private _onlyIcons: boolean;
  private itemClickSubscription: Subscription;

  constructor(@Self() private emitterService: EmitterService) {}

  ngOnDestroy(): void {
    this.itemClickSubscription.unsubscribe();
  }

  public ngAfterContentInit(): void {
    this.setOnlyIconChildState();
    this.subscribeItemSelection();
  }

  private setOnlyIconChildState(): void {
    this.childComponents.forEach((sidebarNavItem: SidebarNavItemComponent) => {
      sidebarNavItem.onlyIcon = this._onlyIcons;
    });
  }

  private resetItemSelection(): void {
    this.childComponents.forEach((navItem: SidebarNavItemComponent) => {
      if (navItem.isActive) {
        navItem.isActive = false;
        return;
      }
    });
  }

  private subscribeItemSelection(): void {
    this.itemClickSubscription = this.emitterService.subscribe((selectedItem: SidebarNavItemComponent) => {
      this.resetItemSelection();
      selectedItem.isActive = true;
      this.itemSelection.emit(selectedItem);
    });
  }
}

