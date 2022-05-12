import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITask} from "../../interfaces";
import {map, Observable} from "rxjs";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  static url = 'https://angular-organizer-id26091994-default-rtdb.europe-west1.firebasedatabase.app/tasks';

  constructor(
    private http: HttpClient
  ) {
  }

  public create(task: ITask): Observable<ITask> {
    return this.http
      .post<{ name: string }>(`${TaskService.url}/${task.date}.json`, task)
      .pipe(map(res => ({...task, id: res.name})));
  }

  public readByDate(date: moment.Moment): Observable<ITask[]> {
    return this.http
      .get<any>(`${TaskService.url}/${date.format('DD-MM-YYYY')}.json`)
      .pipe(map(tasks => {
        if (!tasks) {
          return [];
        }
        return Object.keys(tasks).map(key => ({...tasks[key], id: key}))
      }));
  }
  //
  // public update() {
  //
  // }

  public delete(task: ITask): Observable<void> {
    return this.http
      .delete<void>(`${TaskService.url}/${task.date}/${task.id}.json`);
  }
}
