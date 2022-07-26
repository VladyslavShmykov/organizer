import {Component, OnDestroy, OnInit} from '@angular/core';
import {DateService} from "../../shared/services/date/date.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../shared/services/task/task.service";
import {ITask} from "../../shared/interfaces";
import {Subject, switchMap, take, takeUntil} from "rxjs";
import * as moment from "moment";

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit, OnDestroy {

  private destroy$: Subject<boolean> = new Subject<boolean>();

  public form: FormGroup;
  public tasks: ITask[] = [];

  constructor(
    private dateService: DateService,
    private fb: FormBuilder,
    private taskService: TaskService,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.dateService.date.pipe(
      switchMap(value => this.taskService.readByDate(value)),
      takeUntil(this.destroy$)
    ).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  public get getDate(): moment.Moment {
    return this.dateService.date.getValue();
  }

  public onSubmit(): void {
    const task: ITask = {
      title : this.form.value.title,
      date: this.dateService.date.getValue().format('DD-MM-YYYY'),
      id: Date.now(),
    }

    this.taskService.create(task).then(() => {
        this.tasks.push(task);
        this.form.reset();
    });
  }

  public onRemove(task: ITask): void {
    this.taskService
      .delete(task)
      .pipe(take(1))
      .subscribe(value => {
        value.delete().then(() => this.tasks = this.tasks.filter(item => item.id !== task.id));
      });
  }

  private initForm(): FormGroup {
    return this.form = this.fb.group({
      title: new FormControl('', Validators.required),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
