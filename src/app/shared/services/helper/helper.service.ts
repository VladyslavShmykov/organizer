import {Injectable} from '@angular/core';
import * as moment from "moment";
import {Week} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public generate(now: moment.Moment): Week[] {
    const startDay = now.clone().startOf('month').startOf('isoWeek');
    const endDay = now.clone().endOf('month').endOf('isoWeek');
    const date = startDay.clone().subtract(1, 'day');
    const calendar: Week[] = [];

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
