import {
  ApplicationRef,
  EnvironmentInjector,
  inject,
  Injectable,
  Injector,
  Renderer2,
  RendererFactory2,
} from "@angular/core";
import { PortalBaseStrategy } from "./PortalStrategy/_portal-base.class";
import { PortalComponentStrategy } from "./PortalStrategy/portal-component.class";
import {
  isPortalComponent,
  NewPortal,
  PortalComponent,
  PortalContractOptions,
} from "./types";

@Injectable({
  providedIn: "root",
})
export class PortalService {
  private renderer: Renderer2;
  private rendererFactory: RendererFactory2 = inject(RendererFactory2);
  private appRef: ApplicationRef = inject(ApplicationRef);
  private envInjector: EnvironmentInjector = inject(EnvironmentInjector);
  private injector: Injector = inject(Injector);

  constructor() {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public open(config: PortalContractOptions) {
    const strategy: PortalBaseStrategy<NewPortal> | null =
      this.getValidStrategy(config);

    if (strategy === null) {
      throw new Error("strategy is null");
    }

    strategy.open();
  }

  private getValidStrategy(
    config: PortalContractOptions,
  ): PortalBaseStrategy<NewPortal> | null {
    if (isPortalComponent(config as PortalComponent)) {
      return new PortalComponentStrategy(
        config as PortalComponent,
        this.injector,
      );
    }

    return null;
  }
}
