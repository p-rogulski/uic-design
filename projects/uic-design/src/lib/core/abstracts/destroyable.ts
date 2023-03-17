import { Directive, OnDestroy } from '@angular/core';

import { ReplaySubject } from 'rxjs';

@Directive()
export abstract class Destroyable implements OnDestroy {
  protected destroyed$: ReplaySubject<boolean>;

  constructor() {
    this.destroyed$ = new ReplaySubject(1);
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
