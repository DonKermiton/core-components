import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  HostBinding,
  Renderer2, ViewChild, ViewContainerRef
} from '@angular/core';
import {fadeAnimations} from '@/core-components/animations'
import {PortalService} from "@/core-components/portal";
import {OverlayAttachDirective} from "./overlay-attach.directive";
import {OverlayComponentBlueprint, OverlayConfigType} from "./overlay.types";

@Component({
  selector: 'lib-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  standalone: true,
  animations: [
    fadeAnimations.fadeOnEnter,
    fadeAnimations.fadeOnLeave
  ],
  imports: [
    OverlayAttachDirective
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent {

  @HostBinding('@fadeOnEnter')
  public animateOnEnter = null;

  @HostBinding('@fadeOnLeave')
  public animateOnLeave = null;

  @HostBinding('style.width')
  public width = '100%'

  @ViewChild(OverlayAttachDirective, {static: true, read: ViewContainerRef })
  viewHost!: ViewContainerRef;

  constructor(private cdRef: ChangeDetectorRef,
              private renderer: Renderer2,
              private portalService: PortalService) {}

  onBackdropClick() {
    void 0;
  }

  private createComponent(config: OverlayConfigType): any {
    const ref: ComponentRef<OverlayComponentBlueprint> = this.viewHost.createComponent<any>(config.component)

    if (config.data) {
      ref.instance.data = config.data;
    }

    return ref;
  }
}
