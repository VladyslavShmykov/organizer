import {NgModule} from "@angular/core";
import {MomentPipe} from "./moment.pipe";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    MomentPipe,
  ],
  exports: [
    MomentPipe
  ],
  imports: [
    CommonModule,
  ]
})
export class MomentPipeModule {
}
