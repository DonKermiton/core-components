import { EnvironmentInjector, Injector, TemplateRef } from "@angular/core";

export interface NewPortal {
  root?: HTMLElement;
  envInjector?: EnvironmentInjector;
}

export interface PortalComponent extends NewPortal {
  component: any;
}

export interface PortalTemplate extends NewPortal {
  template: TemplateRef<any>;
}

export type PortalContractOptions = PortalComponent | PortalTemplate;

export function isPortalComponent(
  component: PortalComponent,
): component is PortalComponent {
  return component.component !== null;
}

export function isPortalTemplate(
  template: PortalTemplate,
): template is PortalTemplate {
  return template.template !== null;
}
