import { Injectable } from '@angular/core';

import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmitterService {
  public event$: Observable<any>;
  private eventEmitter$: Subject<any> = new Subject();

  public next(value: unknown) {
    this.eventEmitter$.next(value);
  }

  public subscribe(next: (value: any) => void): Subscription {
    return this.eventEmitter$.asObservable().subscribe(next);
  }
}
