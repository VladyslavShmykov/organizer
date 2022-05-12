import {Injectable} from '@angular/core';
import * as moment from "moment";
import {IWeek} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public generate(now: moment.Moment): IWeek[] {
    const startDay = now.clone().startOf('month').startOf('isoWeek');
    const endDay = now.clone().endOf('month').endOf('isoWeek');
    const date = startDay.clone().subtract(1, 'day');
    const calendar: IWeek[] = [];

    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7).fill(0).map(() => {
          const value = date.add(1, 'day').clone();
          const active = moment().isSame(value, 'date');
          const disabled = !now.isSame(value, 'month');
          const selected = now.isSame(value, 'date');


          return {value, active, disabled, selected};
        })
      })
    }
    return calendar;
  }
}
