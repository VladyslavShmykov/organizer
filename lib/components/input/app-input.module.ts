import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppInputComponent} from './app-input.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AppInputComponent
  ]
})
export class AppInputModule {
}
