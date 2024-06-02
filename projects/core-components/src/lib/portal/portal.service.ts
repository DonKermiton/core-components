import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  inject,
  Injectable,
  Renderer2,
  RendererFactory2,
  Type,
} from "@angular/core";
import {
  isPortalComponent,
  PortalComponent,
  PortalContractOptions,
  PortalTemplate,
} from "./types";

@Injectable({
  providedIn: "root",
})
export class PortalService {
  private renderer: Renderer2;
  private rendererFactory: RendererFactory2 = inject(RendererFactory2);
  private appRef: ApplicationRef = inject(ApplicationRef);
  private envInjector: EnvironmentInjector = inject(EnvironmentInjector);

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public open(config: PortalContractOptions) {
    const component = this.createComponent(config);
  }

  private getValidStrategy(
    config: PortalContractOptions,
  ): PortalComponent | PortalTemplate {
    if (isPortalComponent(config as PortalComponent)) return;
  }

  private createComponent(component: Type<any>): ComponentRef<unknown> {
    const componentRef = createComponent(<Type<any>>component, {
      environmentInjector: this.envInjector,
    });
    this.appRef.attachView(componentRef.hostView);
    return componentRef;
  }
}
