import { Component, TemplateRef } from "@angular/core";

export interface NewDialog<T> {
  strategy?: DialogStrategy;
  data: T;
}

export interface ComponentDialog<TData extends object> extends NewDialog<TData> {
  component: DialogComponentBlueprint<TData>;
}

export function isComponentDialog<TData extends object>(component: ComponentDialog<TData>): component is ComponentDialog<TData> {
  return component.component !== null;
}

export interface TemplateDialog<TData> extends NewDialog<TData> {
  template: typeof TemplateRef;
}

export interface DialogComponentBlueprint<TData> {
  onDialogOpen(data: TData): void;
}

export enum DialogStrategy {
  HTML_DIALOG,
  OVERLAY,
}
