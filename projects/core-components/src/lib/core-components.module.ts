import { NgModule } from '@angular/core';
import { CoreComponentsComponent } from './core-components.component';
import { OverlayComponent } from './overlay/overlay.component';



@NgModule({
  declarations: [
    CoreComponentsComponent,
    OverlayComponent
  ],
  imports: [
  ],
  exports: [
    CoreComponentsComponent
  ]
})
export class CoreComponentsModule { }
