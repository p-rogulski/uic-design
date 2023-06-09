import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  AvatarComponent,
  BannerComponent,
  BoxComponent,
  BreadcrumbComponent,
  BreadcrumbsComponent,
  ButtonComponent,
  CardComponent,
  ColComponent,
  ContainerComponent,
  ContentListComponent,
  ContentListItemComponent,
  DropdownMenuComponent,
  MenuItemComponent,
  DropdownMenuRefDirective,
  ExpandableSectionComponent,
  FormFieldComponent,
  HeaderComponent,
  HeaderGroupComponent,
  InfoboxComponent,
  InputComponent,
  InputDecoratorComponent,
  InputLabelComponent,
  NavComponent,
  NavItemComponent,
  PanelComponent,
  PictureboxComponent,
  RegionComponent,
  RowComponent,
  SlideComponent,
  SlidePanelComponent,
  StepperComponent,
  SidebarComponent,
  SidebarNavComponent,
  SidebarNavItemComponent,
  SidebarNavSeparatorComponent,
  TopBarComponent,
  ValidationComponent,
  CheckboxComponent,
  ProgressBarComponent,
} from './components';
import { LetDirective } from './directives';
import { EmitterService, ValidationService } from './services';

@NgModule({
  imports: [
    /*Modules*/
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    /*Components*/
    AvatarComponent,
    BannerComponent,
    BreadcrumbComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    CardComponent,
    ContentListComponent,
    ContentListItemComponent,
    DropdownMenuComponent,
    MenuItemComponent,
    ExpandableSectionComponent,
    FormFieldComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    BoxComponent,
    HeaderComponent,
    HeaderGroupComponent,
    InfoboxComponent,
    InputComponent,
    InputDecoratorComponent,
    InputLabelComponent,
    NavComponent,
    NavItemComponent,
    PanelComponent,
    PictureboxComponent,
    RegionComponent,
    SlidePanelComponent,
    SlideComponent,
    StepperComponent,
    SidebarComponent,
    SidebarNavComponent,
    SidebarNavItemComponent,
    SidebarNavSeparatorComponent,
    TopBarComponent,
    ValidationComponent,
    CheckboxComponent,
    ProgressBarComponent,
    /*Directives*/
    LetDirective,
    DropdownMenuRefDirective,
  ],
  exports: [
    /*Modules*/
    FontAwesomeModule,
    /*Components*/
    AvatarComponent,
    BannerComponent,
    BreadcrumbComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    CardComponent,
    ContentListComponent,
    ContentListItemComponent,
    DropdownMenuComponent,
    MenuItemComponent,
    ExpandableSectionComponent,
    FormFieldComponent,
    ContainerComponent,
    RowComponent,
    ColComponent,
    BoxComponent,
    HeaderComponent,
    HeaderGroupComponent,
    InfoboxComponent,
    InputComponent,
    InputDecoratorComponent,
    InputLabelComponent,
    NavComponent,
    NavItemComponent,
    PanelComponent,
    PictureboxComponent,
    RegionComponent,
    SlidePanelComponent,
    SlideComponent,
    StepperComponent,
    SidebarComponent,
    SidebarNavComponent,
    SidebarNavItemComponent,
    SidebarNavSeparatorComponent,
    TopBarComponent,
    ValidationComponent,
    CheckboxComponent,
    ProgressBarComponent,
    /*Directives*/
    LetDirective,
    DropdownMenuRefDirective,
  ],
  providers: [ValidationService, EmitterService],
})
export class UicDesignModule {}
