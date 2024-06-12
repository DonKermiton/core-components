import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ccOverlayAttach]',
  standalone: true
})
export class OverlayAttachDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
