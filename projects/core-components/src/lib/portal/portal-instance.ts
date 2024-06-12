import { ComponentRef } from "@angular/core";
import { Observable, ReplaySubject, Subject } from "rxjs";

export class PortalInstance<TResponse = any> {
  private beforeDestroy$: Subject<void> = new Subject<void>();
  private dataStream$: ReplaySubject<TResponse> = new ReplaySubject(1);

  constructor(public component: ComponentRef<any>) {}

  public getBeforeDestroy(): Observable<void> {
    return this.beforeDestroy$;
  }

  public getDataStream(): Observable<TResponse> {
    return this.dataStream$;
  }

  public destroy(result: TResponse): void {
    this.beforeDestroy$.next();
    this.component.destroy();
  }
}
