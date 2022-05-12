import {Component} from '@angular/core';
import {DateService} from "../shared/services/date/date.service";
import * as moment from "moment";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  constructor(
    private dateService: DateService,
  ) {
  }

  public get getDate(): moment.Moment {
    return this.dateService.date.getValue();
  }

  public onChangeDate(dir: number): void {
    this.dateService.changeMonth(dir);
  }
}
