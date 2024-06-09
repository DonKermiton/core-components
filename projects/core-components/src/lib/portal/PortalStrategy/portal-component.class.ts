import {
  ApplicationRef,
  ComponentRef,
  EmbeddedViewRef,
  createComponent,
} from "@angular/core";
import { PortalInstance } from "../portal-instance";
import { PortalComponent } from "../types";
import { PortalBaseStrategy } from "./_portal-base.class";

export class PortalComponentStrategy extends PortalBaseStrategy<PortalComponent> {
  public override open(): PortalInstance {
    const component = this.createComponent();
    const template = (component.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    this.renderer.appendChild(this.config.root || document.body, template);

    return new PortalInstance(component);
  }

  private createComponent(): ComponentRef<any> {
    const component = createComponent(this.config.component, {
      environmentInjector: this.getInjector(),
    });

    const root: HTMLElement | ApplicationRef = this.getRoot();

    if (root instanceof ApplicationRef) {
      root.attachView(component.hostView);
    } else if (root instanceof HTMLElement) {
      root.appendChild(component.location.nativeElement);
    }

    return component;
  }
}
