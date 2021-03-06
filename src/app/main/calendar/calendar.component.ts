import {Component, OnDestroy, OnInit} from '@angular/core';
import {IDay, IWeek} from "../../shared/interfaces";
import {DateService} from "../../shared/services/date/date.service";
import {Subject, takeUntil} from "rxjs";
import {HelperService} from "../../shared/services/helper/helper.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  public calendar: IWeek[];

  constructor(
    private dateService: DateService,
    private helper: HelperService,
  ) {
  }

  ngOnInit(): void {
    this.dateService.date
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => this.calendar = this.helper.generate(val));

  }

  public onSelectDay(day: IDay): void {
    if (!day.selected) {
      this.dateService.changeDate(day.value);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
