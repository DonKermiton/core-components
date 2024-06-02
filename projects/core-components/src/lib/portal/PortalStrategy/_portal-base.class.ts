import {
  ApplicationRef,
  EnvironmentInjector,
  Injector,
  Renderer2,
  RendererFactory2,
} from "@angular/core";
import { NewPortal } from "../types";

export abstract class PortalBaseStrategy<TStrategy extends NewPortal> {
  public config: TStrategy;
  public abstract open(): void;

  protected renderer: Renderer2;
  public constructor(
    config: TStrategy,
    protected injector: Injector,
  ) {
    this.config = config;
    this.renderer = injector.get(RendererFactory2).createRenderer(null, null);
  }

  protected getRoot(): HTMLElement | ApplicationRef {
    if (this.config.root) {
      return this.config.root;
    }

    return this.injector.get(ApplicationRef);
  }

  protected getInjector(): EnvironmentInjector {
    if (this.config.envInjector) {
      return this.config.envInjector;
    }

    return this.injector.get(EnvironmentInjector);
  }
}
