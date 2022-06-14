import {Component, /*OnDestroy,*/ OnInit} from '@angular/core';
import {DateService} from "../../shared/services/date/date.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../shared/services/task/task.service";
import {ITask} from "../../shared/interfaces";
import {catchError, /*Subject,*/ switchMap, take/*, takeUntil*/} from "rxjs";

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit/*, OnDestroy*/ {

  // private destroy$: Subject<boolean> = new Subject<boolean>();

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
      switchMap(value => this.taskService.readByDate(value))
    ).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  public get getDate(): moment.Moment {
    return this.dateService.date.getValue();
  }

  public onSubmit(): void {
    const {title} = this.form.value;
    const task: ITask = {
      title,
      date: this.dateService.date.getValue().format('DD-MM-YYYY'),
    }

    this.taskService.create(task)
      .pipe(
        catchError(error => {
          throw error
        }),
        take(1)
      ).subscribe(task => {
      this.tasks.push(task);
      this.form.reset();
    });
  }

  onRemove(task: ITask) {
    this.taskService.delete(task)
      .pipe(
        catchError(err => {
        throw err
      }),
        take(1)
      ).subscribe(() => {
      this.tasks = this.tasks.filter(item => item.id !== task.id);
    });
  }


  private initForm(): FormGroup {
    return this.form = this.fb.group({
      title: new FormControl('', Validators.required),
    });
  }

  // ngOnDestroy(): void {
  //   this.destroy$.next(true);
  //   this.destroy$.complete();
  // }

}
