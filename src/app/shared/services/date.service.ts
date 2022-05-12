import {Injectable} from '@angular/core';
import * as moment from "moment";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DateService {

  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject<moment.Moment>(moment());

  public changeMonth(dir: number): void {
    const nextDate = this.date.value.add(dir, 'month');
    this.date.next(nextDate);
  }

}
