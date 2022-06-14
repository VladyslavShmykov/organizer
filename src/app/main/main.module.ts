import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import {CalendarComponent} from "./calendar/calendar.component";
import {SelectorComponent} from "./selector/selector.component";
import {OrganizerComponent} from "./organizer/organizer.component";
import {MainComponent} from './main.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MomentPipeModule} from "../shared/pipes/moment/moment.pipe.module";


@NgModule({
  declarations: [
    MainComponent,
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    MomentPipeModule,
  ]
})
export class MainModule {
}
