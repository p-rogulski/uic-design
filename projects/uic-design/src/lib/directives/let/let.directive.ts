import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[uicLet]',
  standalone: true,
})
export class LetDirective implements OnInit {

  @Input() public uicLet: unknown;

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<{ uicLet: unknown }>) {}

  public ngOnInit(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      uicLet: this.uicLet,
    });
  }
}
