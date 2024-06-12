import {Type} from "@angular/core";

export interface OverlayConfigType<T = void> {
  component: Type<OverlayComponentBlueprint>,
  showBackdrop?: boolean,
  closeOnBackdropClick?: boolean;
  data?: T;
}

export interface OverlayComponentBlueprint<T = void> {
  data: T;
  onOverlayOpen(): void;
}
